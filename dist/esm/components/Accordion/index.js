var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { default as MUIAccordion } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '../Box';
import { IconButton } from '../IconButton';
const commonSxStyles = {
    pointerEvents: 'auto'
};
export const Accordion = forwardRef((_a, ref) => {
    var { options, getPanel, summaryPointerEvent } = _a, rest = __rest(_a, ["options", "getPanel", "summaryPointerEvent"]);
    const [expanded, setExpanded] = useState(options[0]['labelId']);
    const handleAccordionOnChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        if (getPanel) {
            getPanel(panel);
        }
    };
    return (_jsx(_Fragment, { children: options.map((item, index) => {
            return (_jsxs(MUIAccordion, Object.assign({ ref: ref, TransitionProps: { unmountOnExit: true } }, rest, { expanded: expanded === item.labelId, onChange: handleAccordionOnChange(item.labelId) }, { children: [_jsx(AccordionSummary, Object.assign({ sx: {
                            flexDirection: 'row-reverse',
                            borderBottom: '1px solid',
                            borderColor: 'neutral.main',
                            pointerEvents: 'none'
                        }, expandIcon: _jsx(IconButton, { children: _jsx(ExpandMoreIcon, { sx: commonSxStyles }) }) }, { children: _jsxs(Box, Object.assign({ display: 'flex', justifyContent: 'space-between', width: '100%', onClick: (e) => e.stopPropagation() }, { children: [_jsx(Box, Object.assign({ sx: { pointerEvents: summaryPointerEvent ? summaryPointerEvent : 'auto' } }, { children: item.summary })), (item === null || item === void 0 ? void 0 : item.rightSummary) && _jsx(Box, Object.assign({ sx: commonSxStyles }, { children: item.rightSummary }))] })) })), _jsx(AccordionDetails, { children: item.details })] }), index));
        }) }));
});
//# sourceMappingURL=index.js.map