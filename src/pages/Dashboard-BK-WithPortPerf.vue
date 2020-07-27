<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
           <a href="#">
            <stats-card>
              <div slot="header" class="icon-warning">
                <Svg-Icon name="ico-portfolio" class="text-equity" />
              </div>
              <div slot="content">
                <p class="card-category">Equity</p>
                <h4 class="card-title">1.29 M</h4>
              </div>
              <div slot="footer">
                <i class="fa fa-clock-o"></i>Last day
              </div>
            </stats-card>
           </a>
        </div>

        <div class="col-xl-3 col-md-6">
           <a href="#">
            <stats-card>
              <div slot="header" class="icon-success">
                <Svg-Icon name="ico-portfolio" class="text-derivatives" />
              </div>
              <div slot="content">
                <p class="card-category">Derivatives</p>
                <h4 class="card-title">534 K</h4>
              </div>
              <div slot="footer">
                <i class="fa fa-clock-o"></i>Last day
              </div>
            </stats-card>
           </a>
        </div>

        <div class="col-xl-3 col-md-6">
          <a href="#">
            <stats-card>
                <div slot="header" class="icon-info">
                 <Svg-Icon name="ico-portfolio" class="text-btf" />
                </div>
                <div slot="content">
                  <p class="card-category">Overseas Equity</p>
                  <h4 class="card-title">975 K</h4>
                </div>
                <div slot="footer">
                  <i class="fa fa-clock-o"></i>Last day
                </div>
            </stats-card>
          </a>
        </div>

        <div class="col-xl-3 col-md-6">
           <a href="#">
            <stats-card>
              <div slot="header" class="icon-danger">
                  <Svg-Icon name="ico-portfolio" size="10" class="text-mutual-funds" />
              </div>
              <div slot="content">
                <p class="card-category">Mutual Funds</p>
                <h4 class="card-title">2.46 M</h4>
              </div>
              <div slot="footer">
                <i class="fa fa-clock-o"></i>Last day
              </div>
            </stats-card>
           </a>
        </div>

      </div>
      <div class="row">
        <div class="col-md-8">
          <chart-card :chart-data="lineChart.data"
                      :chart-options="lineChart.options"
                      :responsive-options="lineChart.responsiveOptions">
            <template slot="header">
              <h4 class="card-title">Portfolio Performance</h4>
              <p class="card-category">Know your investment timeline</p>
            </template>
            <template slot="footer">
              <div class="legend small">
                <i class="fa fa-circle text-equity"></i> Equity
                <i class="fa fa-circle text-derivatives"></i> Derivatives
                <i class="fa fa-circle text-btf"></i> Overseas Equity
                <i class="fa fa-circle text-mutual-funds"></i> Mutual Funds
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-4">
          <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">Asset Allocation</h4>
              <p class="card-category">Don't put all eggs in one basket</p>
            </template>
            <template slot="footer">
               <div class="legend small">
                  <i class="fa fa-circle text-equity"></i> Equity
                  <i class="fa fa-circle text-derivatives"></i> Derivatives
                  <i class="fa fa-circle text-btf"></i> Overseas Equity
                  <i class="fa fa-circle text-mutual-funds"></i> Mutual Funds
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Yesterday
              </div>
            </template>
          </chart-card>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <chart-card
            :chart-data="barChart.data"
            :chart-options="barChart.options"
            :chart-responsive-options="barChart.responsiveOptions"
            chart-type="Bar">
            <template slot="header">
              <h4 class="card-title">2014 Sales</h4>
              <p class="card-category">All products including Taxes</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Tesla Model S
                <i class="fa fa-circle text-danger"></i> BMW 5 Series
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-check"></i> Data information certified
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-6">
          <card>
            <template slot="header">
              <h5 class="title">Tasks</h5>
              <p class="category">Backend development</p>
            </template>
            <l-table :data="tableData.data"
                     :columns="tableData.columns">
              <template slot="columns"></template>

              <template slot-scope="{row}">
                <td>
                  <base-checkbox v-model="row.checked"></base-checkbox>
                </td>
                <td>{{row.title}}</td>
                <td class="td-actions text-right">
                  <button type="button" class="btn-simple btn btn-xs btn-info" v-tooltip.top-center="editTooltip">
                    <i class="fa fa-edit"></i>
                  </button>
                  <button type="button" class="btn-simple btn btn-xs btn-danger" v-tooltip.top-center="deleteTooltip">
                    <i class="fa fa-times"></i>
                  </button>
                </td>
              </template>
            </l-table>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </div>
          </card>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ChartCard from 'src/components/Cards/ChartCard.vue'
  import StatsCard from 'src/components/Cards/StatsCard.vue'
  import LTable from 'src/components/Table.vue'
  import SvgIcon from 'src/components/Icons/Svg-Icon.vue'

  export default {
    components: {
      LTable,
      ChartCard,
      StatsCard,
      SvgIcon
    },
    data () {
      return {
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        pieChart: {
          data: {
            labels: ['25%', '10%' ,'18%', '47%'],
            series: [25, 10, 18 , 47]
          }
        },
        lineChart: {
          data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
            series: [
              [0.700, 0.500, 0.300, 0.200, 0.560, 0.980, 1.290],
              [0.400, 0.152, 0.450, 0.240, 0.480, 0.235, 0.534],
              [0.530, 0.433, 0.230, 0.240, 0.360, 0.670, 0.975],
              [1.000, 0.840, 0.721, 0.978, 1.450, 1.890, 2.460]
            ]
          },
          options: {
            low: 0,
            high: 3,
            showArea: false,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: true,
            showLine: true,
            showPoint: true,
            fullWidth: true,
            chartPadding: {
              right: 50
            }
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        barChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
              [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        tableData: {
          data: [
            {title: 'Sign contract for "What are conference organizers afraid of?"', checked: false},
            {title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true},
            {
              title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              checked: true
            },
            {title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false},
            {title: 'Read "Following makes Medium better"', checked: false},
            {title: 'Unfollow 5 enemies from twitter', checked: false}
          ]
        }
      }
    }
  }
</script>
<style>

</style>
