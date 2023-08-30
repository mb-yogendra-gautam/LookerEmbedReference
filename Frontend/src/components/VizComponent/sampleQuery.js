// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export const sampleQuery = 
    {
      model: 'reporting_edw',
      view: 'sales_detail_view',
      fields: ['sales_detail_view.saledate_month', 'sales_detail_view.CategoryCount'],
      sorts: ['sales_detail_view.saledate_month'],
      "filters": {
        "sales_detail_view.saledate_date": "2023"
      },
      limit: '50',
      // filters: {
      //   "blockgroup.total_pop": "[0,50000000]"
      // },
      column_limit: '50',
      "vis_config": {
      "show_view_names": false,
      "show_row_numbers": true,
      "transpose": false,
      "truncate_text": true,
      "hide_totals": false,
      "hide_row_totals": false,
      "size_to_fit": true,
      "table_theme": "white",
      "limit_displayed_rows": false,
      "enable_conditional_formatting": false,
      "header_text_alignment": "left",
      "header_font_size": 12,
      "rows_font_size": 12,
      "conditional_formatting_include_totals": false,
      "conditional_formatting_include_nulls": false,
      "type": "looker_grid",
      "x_axis_gridlines": false,
      "y_axis_gridlines": true,
      "show_y_axis_labels": true,
      "show_y_axis_ticks": true,
      "y_axis_tick_density": "default",
      "y_axis_tick_density_custom": 5,
      "show_x_axis_label": true,
      "show_x_axis_ticks": true,
      "y_axis_scale_mode": "linear",
      "x_axis_reversed": false,
      "y_axis_reversed": false,
      "plot_size_by_field": false,
      "trellis": "",
      "stacking": "",
      "legend_position": "center",
      "point_style": "none",
      "show_value_labels": false,
      "label_density": 25,
      "x_axis_scale": "auto",
      "y_axis_combined": true,
      "ordering": "none",
      "show_null_labels": false,
      "show_totals_labels": false,
      "show_silhouette": false,
      "totals_color": "#808080",
      "defaults_version": 1,
      "hidden_pivots": {},
      "series_types": {},
      "show_null_points": true,
      "interpolation": "linear"
  },
      //dynamic_fields: '[{"category":"dimension","expression":"${state.state_name}","label":"State","value_format":null,"value_format_name":"","dimension":"state","_kind_hint":"dimension","_type_hint":"string"}]',
      //has_table_calculations: false
    }