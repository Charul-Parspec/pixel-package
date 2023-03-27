"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
const ej2_base_1 = require("@syncfusion/ej2-base");
require("./styles.css");
const Box_1 = require("../Box");
const ej2_grids_1 = require("@syncfusion/ej2-grids");
const react_1 = require("react");
const TextField_1 = require("../TextField");
const IconButton_1 = require("../IconButton");
const Icons_1 = require("../Icons");
const Typography_1 = require("../Typography");
const Tooltip_1 = require("../Tooltip");
const license = window.localStorage.getItem('syncfusionLicense');
(0, ej2_base_1.registerLicense)(license);
exports.Table = (0, react_1.forwardRef)((props, ref) => {
    const { children, data, childMappingKey, allowExports, allowRowDragAndDrop, frozenColumns, treeColumnIndex, allowPaging, pageSettings, allowResizing, showToolbar, toolBarOptions, height, allowFiltering, editSettings, filterSettings, onHideUnhide, onAddDuplicates, onCheckboxChange, onDragEnd, onEdit, onSearch, onDelete, selectionSettings, onRowSelection, loading, toolbarRightSection, searchSettings, hiddenProperty } = props;
    const tableRef = (0, react_1.useRef)();
    const [selected, setSelectedForBanner] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        var _a, _b, _c, _d;
        let obj = document.getElementsByClassName('e-grid')[0].ej2_instances[0].localeObj.localeStrings;
        if (loading) {
            obj.EmptyRecord = '';
            (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.showSpinner();
            (_b = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
        }
        else {
            (_c = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _c === void 0 ? void 0 : _c.hideSpinner();
            if (data.length === 0) {
                obj.EmptyRecord = 'No records to display';
                (_d = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
            }
        }
    }, [loading]);
    const actionComplete = (args) => {
        if (args.type === 'save') {
            onEdit(args);
        }
        else if (args.requestType === 'searching') {
            onSearch(args);
        }
    };
    const rowDrop = (args) => {
        var _a;
        const droppedData = (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getRowInfo(args.target.parentElement).rowData; //dropped data
        let droppedId, draggedId;
        //here collect the taskid value based on parent records
        if (!(0, ej2_base_1.isNullOrUndefined)(droppedData)) {
            if (!(0, ej2_base_1.isNullOrUndefined)(droppedData.parentItem) && args.data[0].parentItem != null) {
                droppedId = droppedData.parentItem.taskID; //dropped data
                draggedId = args.data[0].parentItem.taskID; // dragged data
            }
            else if (droppedData.hasChildRecords == true) {
                droppedId = droppedData.taskID; //dropped data
                draggedId = args.data[0].taskID; // dragged data
            }
        }
        //Here we prevent for top / bottom position
        if (droppedId != draggedId && args.data[0].level != droppedData.level) {
            args.cancel = true;
        }
        else if (args.dropPosition == 'topSegment' || args.dropPosition == 'bottomSegment') {
            //here prevent the drop for within child parent
            if (args.data[0].level != droppedData.level) {
                args.cancel = true;
            }
            else if (args.data[0].level != 0 && droppedData.level != 0) {
                if (args.data[0].level == droppedData.level &&
                    ((0, ej2_base_1.isNullOrUndefined)(args.data[0].hasChildRecords) || (0, ej2_base_1.isNullOrUndefined)(droppedData.hasChildRecords) || args.data[0].hasChildRecords == true) &&
                    droppedId != draggedId) {
                    args.cancel = true; //here we prevent drop the record in top of another parent's child
                }
            }
        }
        //Here we prevent the drop for child position
        if (args.dropPosition == 'middleSegment') {
            if (!(0, ej2_base_1.isNullOrUndefined)(draggedId) && !(0, ej2_base_1.isNullOrUndefined)(droppedId)) {
                if (droppedId == draggedId || args.data[0].level == droppedData.level) {
                    args.cancel = true;
                }
            }
            else if (args.data[0].level == droppedData.level || (args.data[0].level != droppedData.level && (0, ej2_base_1.isNullOrUndefined)(draggedId) && (0, ej2_base_1.isNullOrUndefined)(droppedId))) {
                args.cancel = true;
            }
        }
        onDragEnd(tableRef.current.getDataModule().treeModule.hierarchyData);
    };
    const checkboxChange = (args) => {
        var _a, _b, _c;
        onCheckboxChange((_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedRecords());
        setSelectedForBanner((_c = (_b = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _b === void 0 ? void 0 : _b.getSelectedRecords()) === null || _c === void 0 ? void 0 : _c.length);
    };
    const rowSelected = (args) => {
        onRowSelection(tableRef.current.getSelectedRecords());
    };
    const rowDeselected = (args) => {
        onRowSelection(tableRef.current.getSelectedRecords());
    };
    const rowDataBound = (args) => {
        if ((0, ej2_grids_1.getObject)(hiddenProperty, args.data) === true) {
            args.row.style.opacity = '0.4';
        }
        else {
            args.row.style.opacity = '1';
        }
        if ((selectionSettings === null || selectionSettings === void 0 ? void 0 : selectionSettings.type) === 'Single') {
            (0, ej2_base_1.addClass)([args.row], 'singleSelect');
        }
    };
    (0, react_1.useImperativeHandle)(ref, () => {
        const clearSelection = () => {
            tableRef.current.clearSelection();
            setSelectedForBanner(() => 0);
        };
        return {
            clearSelection,
            setSelectedForBanner
        };
    });
    const closeBanner = () => {
        setSelectedForBanner(() => 0);
        tableRef.current.clearSelection();
    };
    var headerCellInfo = function (args) {
        var _a, _b, _c, _d;
        if ((_b = (_a = args === null || args === void 0 ? void 0 : args.cell) === null || _a === void 0 ? void 0 : _a.column) === null || _b === void 0 ? void 0 : _b.allowSorting) {
            (_d = (_c = args === null || args === void 0 ? void 0 : args.node) === null || _c === void 0 ? void 0 : _c.classList) === null || _d === void 0 ? void 0 : _d.add('customicon');
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [showToolbar && ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', justifyContent: "space-between", mb: 2 }, { children: [(0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: "flex", alignItems: "center", gap: 1 }, { children: [(toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('search')) && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: 300 }, { children: (0, jsx_runtime_1.jsx)(TextField_1.TextField, { label: 'Search...', variant: "standard", size: "small", onChange: (t) => tableRef.current.search(t.target.value) }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('duplicate')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: "Add Duplicate Record(s)" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onAddDuplicates(tableRef.current.getSelectedRecords()) }, { children: (0, jsx_runtime_1.jsx)(Icons_1.ControlPointDuplicateIcon, { fontSize: "medium" }) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('delete')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: "Delete Record(s)" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => {
                                        var _a;
                                        onDelete((_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedRecords());
                                    } }, { children: (0, jsx_runtime_1.jsx)(Icons_1.DeleteOutlineIcon, { fontSize: "medium" }) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('hide')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: "Hide/Unhide Record(s)" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onHideUnhide(tableRef.current.getSelectedRecords()) }, { children: (0, jsx_runtime_1.jsx)(Icons_1.VisibilityOffIcon, { fontSize: "medium" }) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('clearFilters')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: "Clear Filter(s)" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => tableRef.current.clearFiltering() }, { children: (0, jsx_runtime_1.jsx)(Icons_1.FilterAltOffIcon, { fontSize: "medium" }) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('selectedItems')) && selected > 0 && ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ p: 1, pl: 3, pr: 2, bgcolor: 'tertiary.main', color: 'secondary.contrastText', display: "flex", alignItems: "center", gap: 2 }, { children: [(0, jsx_runtime_1.jsxs)(Typography_1.BodySmall, Object.assign({ color: "secondary.contrastText" }, { children: [selected, " item(s) selected"] })), (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: closeBanner, sx: { color: 'secondary.contrastText', margin: 0, padding: 0 } }, { children: (0, jsx_runtime_1.jsx)(Icons_1.CloseIcon, { fontSize: "small" }) }))] })))] })), (0, jsx_runtime_1.jsx)(Box_1.Box, { children: toolbarRightSection })] }))), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-pane" }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-section" }, { children: data && ((0, jsx_runtime_1.jsxs)(ej2_react_treegrid_1.TreeGridComponent, Object.assign({ actionComplete: actionComplete, headerCellInfo: headerCellInfo, rowSelected: rowSelected, rowDeselected: rowDeselected, rowDataBound: rowDataBound, height: height, ref: tableRef, dataSource: data, treeColumnIndex: treeColumnIndex, childMapping: childMappingKey, allowPdfExport: allowExports, allowExcelExport: allowExports, allowRowDragAndDrop: allowRowDragAndDrop, allowResizing: allowResizing, selectionSettings: selectionSettings, rowDrop: rowDrop, frozenColumns: frozenColumns, allowSorting: true, editSettings: editSettings, searchSettings: searchSettings, pageSettings: pageSettings, allowPaging: allowPaging, allowFiltering: allowFiltering, filterSettings: filterSettings, checkboxChange: checkboxChange }, { children: [(0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.ColumnsDirective, { children: children }), (0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Freeze, ej2_react_treegrid_1.RowDD, ej2_react_treegrid_1.Selection, ej2_react_treegrid_1.Sort, ej2_react_treegrid_1.Edit, ej2_react_treegrid_1.Page, ej2_react_treegrid_1.ExcelExport, ej2_react_treegrid_1.PdfExport, ej2_react_treegrid_1.Resize, ej2_react_treegrid_1.Filter, ej2_react_treegrid_1.ContextMenu] })] }))) })) }))] }));
});
exports.Table.defaultProps = {
    excelExportProperties: {
        fileName: 'newExcel.xlsx',
        isCollapsedStatePersist: false
    },
    pdfExportProperties: {
        fileName: 'newPdf.pdf',
        isCollapsedStatePersist: false
    },
    childMappingKey: '',
    allowExports: true,
    allowRowDragAndDrop: true,
    frozenColumns: 0,
    treeColumnIndex: -1,
    allowPaging: true,
    pageSettings: {
        pageSize: 10
    },
    allowResizing: true,
    allowFiltering: true,
    filterSettings: {
        type: 'Excel'
    },
    selectionSettings: {
        checkboxOnly: true,
        persistSelection: true
    },
    editSettings: {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Cell',
        showDeleteConfirmDialog: true,
        showConfirmDialog: true,
        newRowPosition: 'Bottom'
    },
    onAddDuplicates: (data) => { },
    onHideUnhide: (data) => { },
    onCheckboxChange: (data) => { },
    onDragEnd: (data) => { },
    onAdd: (data) => { },
    onEdit: (data) => { },
    onDelete: (data) => { },
    onSearch: (data) => { },
    onRowSelection: (data) => { },
    loading: false,
    showToolbar: true,
    toolBarOptions: [],
    toolbarRightSection: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}),
    searchSettings: {
        hierarchyMode: 'Both'
    },
    hiddenProperty: 'is_hidden'
};
//# sourceMappingURL=Table.js.map