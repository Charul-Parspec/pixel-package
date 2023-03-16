import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { IconButton, Menu as MuiMenu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { MoreVertIcon } from '../Icons';
export const Menu = ({ options, children }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (_jsxs(_Fragment, { children: [children ? (React.cloneElement(children, { onClick: handleClick })) : (_jsx(IconButton, Object.assign({ onClick: handleClick }, { children: _jsx(MoreVertIcon, {}, void 0) }), void 0)), _jsx(MuiMenu, Object.assign({ id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose }, { children: options.map(({ label, onClick }) => (_jsx(MenuItem, Object.assign({ onClick: () => {
                        onClick();
                        handleClose();
                    } }, { children: label }), label))) }), void 0)] }, void 0));
};
//# sourceMappingURL=index.js.map