import { useState, useEffect, useCallback } from 'react';

import { $patchStyleText } from '@lexical/selection';
import { $getSelection, LexicalEditor } from 'lexical';

import { IconButton } from '../IconButton';
import { RemoveIcon, AddIcon } from '../Icons';
import { TextField } from '../TextField';
import { Box } from '../Box';

const MIN_ALLOWED_FONT_SIZE = 8;
const MAX_ALLOWED_FONT_SIZE = 72;
const DEFAULT_FONT_SIZE = 15;

// eslint-disable-next-line no-shadow
enum UPDATE_FONT_SIZE_TYPE {
    INCREMENT = 1,
    DECREMENT
}

export function FontSize({ selectionFontSize, disabled, editor }: { selectionFontSize: string; disabled: boolean; editor: LexicalEditor }) {
    const [inputValue, setInputValue] = useState<string>(selectionFontSize);

    /**
     * Calculates the new font size based on the update type.
     * @param currentFontSize - The current font size
     * @param updateType - The type of change, either increment or decrement
     * @returns the next font size
     */
    const calculateNextFontSize = (currentFontSize: number, updateType: UPDATE_FONT_SIZE_TYPE | null) => {
        if (!updateType) {
            return currentFontSize;
        }

        let updatedFontSize: number = currentFontSize;
        switch (updateType) {
            case UPDATE_FONT_SIZE_TYPE.DECREMENT:
                switch (true) {
                    case currentFontSize > MAX_ALLOWED_FONT_SIZE:
                        updatedFontSize = MAX_ALLOWED_FONT_SIZE;
                        break;
                    case currentFontSize >= 48:
                        updatedFontSize -= 12;
                        break;
                    case currentFontSize >= 24:
                        updatedFontSize -= 4;
                        break;
                    case currentFontSize >= 14:
                        updatedFontSize -= 2;
                        break;
                    case currentFontSize >= 9:
                        updatedFontSize -= 1;
                        break;
                    default:
                        updatedFontSize = MIN_ALLOWED_FONT_SIZE;
                        break;
                }
                break;

            case UPDATE_FONT_SIZE_TYPE.INCREMENT:
                switch (true) {
                    case currentFontSize < MIN_ALLOWED_FONT_SIZE:
                        updatedFontSize = MIN_ALLOWED_FONT_SIZE;
                        break;
                    case currentFontSize < 12:
                        updatedFontSize += 1;
                        break;
                    case currentFontSize < 20:
                        updatedFontSize += 2;
                        break;
                    case currentFontSize < 36:
                        updatedFontSize += 4;
                        break;
                    case currentFontSize <= 60:
                        updatedFontSize += 12;
                        break;
                    default:
                        updatedFontSize = MAX_ALLOWED_FONT_SIZE;
                        break;
                }
                break;

            default:
                break;
        }
        return updatedFontSize;
    };
    /**
     * Patches the selection with the updated font size.
     */

    const updateFontSizeInSelection = useCallback(
        (newFontSize: string | null, updateType: UPDATE_FONT_SIZE_TYPE | null) => {
            const getNextFontSize = (prevFontSize: string | null): string => {
                if (!prevFontSize) {
                    prevFontSize = `${DEFAULT_FONT_SIZE}px`;
                }
                prevFontSize = prevFontSize.slice(0, -2);
                const nextFontSize = calculateNextFontSize(Number(prevFontSize), updateType);
                return `${nextFontSize}px`;
            };

            editor.update(() => {
                if (editor.isEditable()) {
                    const selection = $getSelection();
                    if (selection !== null) {
                        $patchStyleText(selection, {
                            'font-size': newFontSize || getNextFontSize,
                            'line-height': '1.125'
                        });
                    }
                }
            });
        },
        [editor]
    );

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const inputValueNumber = Number(inputValue);

        if (['e', 'E', '+', '-'].includes(e.key) || isNaN(inputValueNumber)) {
            e.preventDefault();
            return;
        }

        if (e.key === 'Enter') {
            e.preventDefault();

            let updatedFontSize = inputValueNumber;
            if (inputValueNumber > MAX_ALLOWED_FONT_SIZE) {
                updatedFontSize = MAX_ALLOWED_FONT_SIZE;
            } else if (inputValueNumber < MIN_ALLOWED_FONT_SIZE) {
                updatedFontSize = MIN_ALLOWED_FONT_SIZE;
            }
            setInputValue(String(updatedFontSize));
            updateFontSizeInSelection(String(updatedFontSize) + 'px', null);
        }
    };

    const handleButtonClick = (updateType: UPDATE_FONT_SIZE_TYPE) => {
        if (inputValue !== '') {
            const nextFontSize = calculateNextFontSize(Number(inputValue), updateType);
            updateFontSizeInSelection(String(nextFontSize) + 'px', null);
        } else {
            updateFontSizeInSelection(null, updateType);
        }
    };

    useEffect(() => {
        setInputValue(selectionFontSize);
    }, [selectionFontSize]);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="136px">
            <IconButton disabled={disabled || (selectionFontSize !== '' && Number(inputValue) <= MIN_ALLOWED_FONT_SIZE)} onClick={() => handleButtonClick(UPDATE_FONT_SIZE_TYPE.DECREMENT)}>
                <RemoveIcon fontSize="small" color="secondary" />
            </IconButton>

            <TextField
                type="number"
                value={inputValue}
                disabled={disabled}
                inputProps={{
                    min: MIN_ALLOWED_FONT_SIZE,
                    max: MAX_ALLOWED_FONT_SIZE
                }}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                label={''}
                fullWidth
            />

            <IconButton disabled={disabled || (selectionFontSize !== '' && Number(inputValue) >= MAX_ALLOWED_FONT_SIZE)} onClick={() => handleButtonClick(UPDATE_FONT_SIZE_TYPE.INCREMENT)}>
                <AddIcon fontSize="small" color="secondary" />
            </IconButton>
        </Box>
    );
}
