import { forwardRef, FocusEvent, MouseEvent, useState, useEffect } from 'react';
import { Box } from '../Box';
import { BodyXS } from '../Typography';
import { TextField } from '../TextField';
import { Slider } from '../Slider';
import { mark } from '../Slider';
import { styled } from '@mui/material/styles';

const NumberTextField = styled(TextField)(({ theme }) => ({
    '& input[type=number]': {
        '-moz-appearance': 'textfield',
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(2)
    }
}));

interface RangeSliderProps {
    value: [number, number];
    min: number;
    max: number;
    onChange: (data: [number, number]) => void;
    onRangeBlur?: (event: FocusEvent<HTMLInputElement>, data: [number, number]) => void;
    onSliderMouseUp?: (event: MouseEvent<HTMLButtonElement>, data: [number, number]) => void;
    onTextfieldBlur?: (event: FocusEvent<HTMLInputElement>, data: [number, number]) => void;
    onTextfieldEnterKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>, data: [number, number]) => void;
    size?: 'small' | 'medium';
    step?: number;
    color?: 'primary' | 'secondary' | 'tertiary' | 'neutral';
    headerTitle?: string;
    marks?: boolean | mark[];
    disabled?: boolean;
    rightTextfieldWidth?: number;
    leftTextfieldWidth?: number;
    textfieldHeight?: number;
    disableSwap?: boolean;
    showPlus?: boolean;
}

export const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>((props, ref) => {
    const {
        value,
        size,
        step,
        marks,
        min,
        max,
        color,
        headerTitle,
        disabled,
        rightTextfieldWidth,
        leftTextfieldWidth,
        textfieldHeight,
        onChange: onRangeChange,
        onRangeBlur = () => {},
        onSliderMouseUp = () => {},
        onTextfieldBlur = () => {},
        onTextfieldEnterKeyDown = () => {},
        showPlus,
        disableSwap
    } = props;

    const [textFieldVal, setTextFieldVal] = useState<{ lowerField: number; upperField: number }>({ lowerField: value[0], upperField: value[1] });

    const [activeThumbValue, setActiveThumbValue] = useState<number>(textFieldVal.upperField);

    const [plusToggle, setPlusToggle] = useState<boolean>(true);

    function getAdjustedValues(valueArr: [number, number], minVal: number, maxVal: number): [number, number] {
        let [value1, value2] = valueArr;

        if (value1 > value2 || value1 > maxVal) {
            // console.log('1', [value1, value2]);
            value1 = value2 - 1;
        }
        if (value1 < minVal) {
            // console.log('2', [value1, value2]);
            value1 = minVal;
        }

        if (value2 < value1 || value2 < minVal) {
            // console.log('3', [value1, value2]);
            value2 = value1 + 1;
        }
        if (value2 > maxVal) {
            // console.log('4', [value1, value2]);
            value2 = maxVal;
        }

        if (value1 === value2) {
            if (activeThumbValue === 0) {
                if (Math.min(value1, value2 - 1) < min) {
                    value1 = min;
                    value2 = value1 + 1;
                } else {
                    value1 = Math.min(value1, value2 - 1);
                }
            } else {
                if (Math.max(value2, value1 + 1) > max) {
                    value2 = max;
                    value1 = value2 - 1;
                } else {
                    value2 = Math.max(value2, value1 + 1);
                }
            }
        }

        return [value1, value2];
    }

    useEffect(() => {
        setTextFieldVal(() => ({ ...textFieldVal, lowerField: value[0], upperField: value[1] }));
        setActiveThumbValue(textFieldVal.upperField);
    }, [value]);

    useEffect(() => {
        const adjustedValues = getAdjustedValues(value, min, max);
        if (value[0] !== adjustedValues[0] || value[1] !== adjustedValues[1]) {
            onRangeChange(adjustedValues);
        }
    }, [value[0], value[1]]);

    useEffect(() => {
        if (!plusToggle) {
            setPlusToggle(true);
        }
    }, [textFieldVal.upperField]);

    const sliderChangeHandler = (e: any, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        let newData: [number, number];
        if (activeThumb === 0) {
            newData = [Math.min(newValue[0], textFieldVal.upperField - 1), textFieldVal.upperField];
            setTextFieldVal({ ...textFieldVal, lowerField: newData[0], upperField: newData[1] });
        } else {
            newData = [textFieldVal.lowerField, Math.max(newValue[1], textFieldVal.lowerField + 1)];
            setTextFieldVal({ ...textFieldVal, lowerField: newData[0], upperField: newData[1] });
        }

        setActiveThumbValue(() => activeThumb);
        onRangeChange(newData);
    };

    const minChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = Number(inputValue);
        if (!isNaN(numericValue)) {
            const newData: [number, number] = [numericValue, value[1]];
            setTextFieldVal({ ...textFieldVal, lowerField: newData[0], upperField: newData[1] });
        }
    };

    const maxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.target.value;

        if (inputValue.includes('+')) {
            inputValue = inputValue.replace(/\+/g, '');
        }

        const numericValue = Number(inputValue);

        if (numericValue === max) {
            return setPlusToggle(false);
        }

        if (!isNaN(numericValue)) {
            const newData: [number, number] = [value[0], numericValue];
            setTextFieldVal({ ...textFieldVal, lowerField: newData[0], upperField: newData[1] });
        }
    };

    const textfieldBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
        const rawData: [number, number] = [textFieldVal.lowerField, textFieldVal.upperField];
        const newVal = getAdjustedValues(rawData, min, max);
        setTextFieldVal({ ...textFieldVal, lowerField: newVal[0], upperField: newVal[1] });
        onRangeChange(newVal);
        onTextfieldBlur(event, newVal);
    };

    const textfieldKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const rawData: [number, number] = [textFieldVal.lowerField, textFieldVal.upperField];
            const newVal = getAdjustedValues(rawData, min, max);
            setTextFieldVal({ ...textFieldVal, lowerField: newVal[0], upperField: newVal[1] });
            onRangeChange(newVal);
            onTextfieldEnterKeyDown(event, newVal);
        }
    };

    return (
        <Box ref={ref} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} flex={1}>
            <BodyXS color={'text.secondary'}>{headerTitle}</BodyXS>
            <Box mt={headerTitle ? 2 : 0} display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                <Box width={leftTextfieldWidth ? leftTextfieldWidth : 64} height={textfieldHeight ? textfieldHeight : 36}>
                    <NumberTextField
                        label=""
                        //doing .toString() to eliminate the leading zero bug
                        value={textFieldVal.lowerField.toString()}
                        onChange={minChangeHandler}
                        onBlur={textfieldBlurHandler}
                        onKeyDown={textfieldKeyDownHandler}
                        disabled={disabled}
                        inputProps={{ style: { textAlign: 'center' } }}
                    />
                </Box>

                <Box pl={4} pr={4} display={'flex'} flex={1}>
                    <Slider
                        value={value}
                        min={min}
                        max={max}
                        color={color ? color : 'primary'}
                        size={size}
                        marks={marks}
                        step={step}
                        onChange={sliderChangeHandler}
                        onBlur={(e: FocusEvent<HTMLInputElement>) => onRangeBlur(e, value)}
                        onMouseUp={(e: MouseEvent<HTMLButtonElement>) => onSliderMouseUp(e, value)}
                        disabled={disabled}
                        disableSwap={disableSwap}
                    />
                </Box>

                <Box width={rightTextfieldWidth ? rightTextfieldWidth : 64} height={textfieldHeight ? textfieldHeight : 36}>
                    <NumberTextField
                        label=""
                        //doing .toString() to eliminate the leading zero bug
                        // value={textFieldVal.upperField.toString()}
                        value={textFieldVal.upperField === max && showPlus && plusToggle ? `${textFieldVal.upperField}+` : textFieldVal.upperField.toString()}
                        onChange={maxChangeHandler}
                        onBlur={textfieldBlurHandler}
                        onKeyDown={textfieldKeyDownHandler}
                        disabled={disabled}
                        inputProps={{ style: { textAlign: 'center' }, inputMode: 'numeric', pattern: '[0-9]*' }}
                    />
                </Box>
            </Box>
        </Box>
    );
});

RangeSlider.defaultProps = {
    value: [0, 100],
    size: 'small',
    color: 'primary',
    disabled: false,
    disableSwap: true,
    showPlus: false
};
