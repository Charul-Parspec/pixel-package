import React, { useEffect, useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './Table';
import { ColumnDirective, ToolbarItems } from '@syncfusion/ej2-react-treegrid';
import { getValue } from '@syncfusion/ej2-base';
import { dDataP } from './data';
import { Button } from '../Button';
import { ViewArrayIcon } from '../Icons';
import { Box } from '../Box';
import { BodyMedium } from '../Typography';
import { FilterSettingsModel } from '@syncfusion/ej2-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
export default {
    title: 'Table',
    component: Table
} as ComponentMeta<typeof Table>;

export const Basic: ComponentStory<typeof Table> = (props) => {
    const [instanceCount, setInstanceCount] = useState(0);
    useEffect(() => {
        setInstanceCount((prev) => prev + 1);
    }, [props.allowRowDragAndDrop, props.allowEditing, props.allowExports, props.allowPaging, props.allowResizing, props.height, props.frozenColumns, props.treeColumnIndex]);

    const coltemplate = (props: any) => {
        if (props.taskData.name.includes('section')) {
            return (
                <Button size="small" id={props.id}>
                    Section
                </Button>
            );
        } else if (props.taskData.name.includes('product')) {
            return (
                <Button size="small" color="secondary" id={props.id}>
                    Product
                </Button>
            );
        } else {
            return (
                <Button size="small" color="tertiary" id={props.id}>
                    Accessory
                </Button>
            );
        }
    };

    const customFn = (args: { [key: string]: string }): boolean => {
        return getValue('value', args).length >= 3;
    };
    const customFn2 = (args: { [key: string]: string }): boolean => {
        return getValue('value', args).length <= 5;
    };
    const validateReporter = {
        minLength: [customFn, 'Atleast 3 characters required'],
        maxLength: [customFn2, 'Atmax 5 characters allowed']
    };
    const customHeaderTemplate = () => {
        return (
            <Box display={'flex'} gap={2}>
                <BodyMedium>Custom Template Column</BodyMedium>
                <ViewArrayIcon />
            </Box>
        );
    };

    const checkboxFilter: FilterSettingsModel = {
        type: 'CheckBox'
    };
    const menuFilter: FilterSettingsModel = {
        type: 'Menu'
    };
    const filterTemplateOptions = (props: any): any => {
        const dataSource: string[] = ['Yes', 'No'];
        return <DropDownListComponent id={props.column.field} popupHeight="250px" dataSource={dataSource} />;
    };

    const onCheckboxChange = (data: Object[]) => {
        console.log('onCheckboxChange===>\n', data);
    };
    const onDragEnd = (data: Object[]) => {
        console.log('onDragEnd===>\n', data);
    };
    const onAdd = (data: Object) => {
        console.log('onAdd===>\n', data);
    };
    const onEdit = (data: Object) => {
        console.log('onEdit===>\n', data);
    };
    const onDelete = (data: Object) => {
        console.log('onDelete===>\n', data);
    };
    const onSearch = (data: Object) => {
        console.log('onSearch===>\n', data);
    };
    const toolBarOptions: ToolbarItems[] = ['ExcelExport', 'PdfExport', 'Add', 'Delete', 'Update', 'Cancel', 'Search'];
    return (
        <>
            <br />
            <br />
            <Table
                key={instanceCount}
                {...props}
                onDragEnd={onDragEnd}
                onCheckboxChange={onCheckboxChange}
                toolBarOptions={toolBarOptions}
                onAdd={onAdd}
                onEdit={onEdit}
                onDelete={onDelete}
                onSearch={onSearch}
            >
                <ColumnDirective type="checkbox" allowEditing={false} width="50"></ColumnDirective>
                <ColumnDirective field="id" isPrimaryKey={true} visible={false} />
                <ColumnDirective field="taskID" allowEditing={false} headerText="Task ID" width="150" filter={checkboxFilter} editType="numericedit" />
                <ColumnDirective field="name" headerText="Task Name" minWidth="200" filter={menuFilter} />
                <ColumnDirective
                    field="custom"
                    allowEditing={true}
                    allowSorting={false}
                    defaultValue={''}
                    headerText="Custom Component"
                    minWidth="240"
                    template={coltemplate}
                    headerTemplate={customHeaderTemplate}
                    allowFiltering={false}
                />
                <ColumnDirective field="reporter" headerText="Reporter" minWidth="200" validationRules={validateReporter} />
                <ColumnDirective field="available" headerText="Availability" minWidth="200" filter={menuFilter} filterTemplate={filterTemplateOptions} />
            </Table>
        </>
    );
};

Basic.args = {
    height: 400,
    data: dDataP,
    childMappingKey: 'subtasks',
    allowRowDragAndDrop: true,
    frozenColumns: 4,
    treeColumnIndex: 3,
    allowPaging: true,
    pageSettings: { pageSize: 10 },
    allowResizing: true,
    allowEditing: true,
    allowExports: true,

    excelExportProperties: {
        fileName: 'newExcel.xlsx',
        isCollapsedStatePersist: false
    },
    pdfExportProperties: {
        fileName: 'newPdf.pdf',
        isCollapsedStatePersist: false
    },
    allowFiltering: true,
    filterSettings: {
        type: 'Excel'
    }
    // hiddenKeys: ['1', '2', '3', '13']
};
