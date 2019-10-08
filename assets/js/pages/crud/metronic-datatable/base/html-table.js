"use strict";
// Class definition

// var KTDatatableHtmlTableDemo = function() {
// 	// Private functions
//
// 	// demo initializer
// 	var demo = function() {
//
// 		var datatable = $('.kt-datatable').KTDatatable({
// 			data: {
// 				saveState: {cookie: false},
// 			},
// 			search: {
// 				input: $('#generalSearch'),
// 			},
// 			columns: [
//                 {
//                     field: 'LAST SIGNAL',
//                     autoHide: false
//                 },
//
//                 {
// 					field: 'SIGNAL TICKER',
//                     autoHide: false
//                 }
// 			],
// 		});
//
//     $('#kt_form_status').on('change', function() {
//       datatable.search($(this).val().toLowerCase(), 'Status');
//     });
//
//     $('#kt_form_type').on('change', function() {
//       datatable.search($(this).val().toLowerCase(), 'Type');
//     });
//
//     $('#kt_form_status,#kt_form_type').selectpicker();
//
// 	};
//
// 	return {
// 		// Public functions
// 		init: function() {
// 			// init dmeo
// 			demo();
// 		},
// 	};
// }();
//
// jQuery(document).ready(function() {
// 	KTDatatableHtmlTableDemo.init();
// });

var datatable = $('.kt_datatable').KTDatatable({
    // datasource definition
    // layout definition
    layout: {
        scroll: false,
        footer: false,
    },

    // column sorting
    sortable: true,

    pagination: true,

    search: {
        input: $('#generalSearch'),
    }

    //columns definition
    // columns: [
    //     {
    //         field: 'TICKER',
    //         title: '#',
    //         sortable: 'asc',
    //         width: 40,
    //         type: 'number',
    //         selector: false,
    //         textAlign: 'center',
    //     }, {
    //         field: 'employee_id',
    //         title: 'Employee ID',
    //     }, {
    //         field: 'name',
    //         title: 'Name',
    //         template: function(row, index, datatable) {
    //             return row.first_name + ' ' + row.last_name;
    //         },
    //     }, {
    //         field: 'email',
    //         width: 150,
    //         title: 'Email',
    //     }, {
    //         field: 'phone',
    //         title: 'Phone',
    //     }, {
    //         field: 'hire_date',
    //         title: 'Hire Date',
    //         type: 'date',
    //         format: 'MM/DD/YYYY',
    //     }, {
    //         field: 'gender',
    //         title: 'Gender',
    //     }, {
    //         field: 'status',
    //         title: 'Status',
    //         // callback function support for column rendering
    //         template: function(row) {
    //             var status = {
    //                 1: {'title': 'Pending', 'class': 'kt-badge--brand'},
    //                 2: {'title': 'Delivered', 'class': ' kt-badge--metal'},
    //                 3: {'title': 'Canceled', 'class': ' kt-badge--primary'},
    //                 4: {'title': 'Success', 'class': ' kt-badge--success'},
    //                 5: {'title': 'Info', 'class': ' kt-badge--info'},
    //                 6: {'title': 'Danger', 'class': ' kt-badge--danger'},
    //                 7: {'title': 'Warning', 'class': ' kt-badge--warning'},
    //             };
    //             return '<span class="kt-badge ' + status[row.status].class + ' kt-badge--inline kt-badge--pill">' + status[row.status].title + '</span>';
    //         },
    //     }, {
    //         field: 'type',
    //         title: 'Type',
    //         // callback function support for column rendering
    //         template: function(row) {
    //             var status = {
    //                 1: {'title': 'Online', 'state': 'danger'},
    //                 2: {'title': 'Retail', 'state': 'primary'},
    //                 3: {'title': 'Direct', 'state': 'accent'},
    //             };
    //             return '<span class="kt-badge kt-badge--' + status[row.type].state + ' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' + status[row.type].state + '">' +
    //                 status[row.type].title + '</span>';
    //         },
    //     }, {
    //         field: 'Actions',
    //         title: 'Actions',
    //         sortable: false,
    //         width: 130,
    //         overflow: 'visible',
    //         textAlign: 'center',
    //         template: function(row, index, datatable) {
    //             var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
    //             return '<div class="dropdown ' + dropup + '">\
    //                     <a href="#" class="btn btn-hover-brand btn-icon btn-pill" data-toggle="dropdown">\
    //                         <i class="la la-ellipsis-h"></i>\
    //                     </a>\
    //                     <div class="dropdown-menu dropdown-menu-right">\
    //                         <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
    //                         <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
    //                         <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
    //                     </div>\
    //                 </div>\
    //                 <a href="#" class="btn btn-hover-brand btn-icon btn-pill" title="Edit details">\
    //                     <i class="la la-edit"></i>\
    //                 </a>\
    //                 <a href="#" class="btn btn-hover-danger btn-icon btn-pill" title="Delete">\
    //                     <i class="la la-trash"></i>\
    //                 </a>';
    //         },
    //     }],

});
