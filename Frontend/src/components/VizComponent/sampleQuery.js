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
      model: 'basic_ecomm',
      view: 'basic_users',
      fields: ['users.first_name', 'users.last_name'],
      //sorts: ['blockgroup.total_pop desc'],
      limit: '500',
      // filters: {
      //   "blockgroup.total_pop": "[0,50000000]"
      // },
      column_limit: '50',
      vis_config:
      {
        type: 'table',
        column_order: ['users.first_name', 'users.last_name'],
        show_row_numbers: true,
        show_totals: true,
        show_row_totals: true,
        truncate_text: true,
        truncate_header: true
      },
      //dynamic_fields: '[{"category":"dimension","expression":"${state.state_name}","label":"State","value_format":null,"value_format_name":"","dimension":"state","_kind_hint":"dimension","_type_hint":"string"}]',
      //has_table_calculations: false
    }