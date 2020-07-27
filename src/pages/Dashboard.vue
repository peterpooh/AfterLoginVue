<template>
  <div class="content">
    <div class="container-fluid">
      <!-- ************************* Begin Port Value by Products ************************* -->
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <a href="#">
            <stats-card>
              <div slot="header" class="icon-warning">
                <Svg-Icon name="ico-portfolio" class="is-xlarge text-equity" />
              </div>
              <div slot="content">
                <p class="card-category">Equity</p>
                <h4 class="card-title">1.29 M</h4>
              </div>
              <div slot="footer">
                <!-- <i class="fa fa-clock-o"></i>Last day -->
                 <a href="#" target="_blank" class="learn-more">
                      View more<i class="fa fa-chevron-right"></i>
                  </a>
              </div>
            </stats-card>
          </a>
        </div>

        <div class="col-xl-3 col-md-6">
          <a href="#">
            <stats-card>
              <div slot="header" class="icon-success">
                <Svg-Icon name="ico-portfolio" class="is-xlarge text-derivatives" />
              </div>
              <div slot="content">
                <p class="card-category">Derivatives</p>
                <h4 class="card-title">534 K</h4>
              </div>
              <div slot="footer">
                <!-- <i class="fa fa-clock-o"></i>Last day -->
                 <a href="#" target="_blank" class="learn-more">
                      View more<i class="fa fa-chevron-right"></i>
                  </a>
              </div>
            </stats-card>
          </a>
        </div>

        <div class="col-xl-3 col-md-6">
          <a href="#">
            <stats-card>
              <div slot="header" class="icon-info">
                <Svg-Icon name="ico-portfolio" class="is-xlarge text-btf" />
              </div>
              <div slot="content">
                <p class="card-category">Overseas Equity</p>
                <h4 class="card-title">975 K</h4>
              </div>
              <div slot="footer">
               <!--  <i class="fa fa-clock-o"></i>Last day -->
                
                  <a href="#" target="_blank" class="learn-more">
                      View more<i class="fa fa-chevron-right"></i>
                  </a>

              </div>
              
           
            </stats-card>
          </a>
        </div>

        <div class="col-xl-3 col-md-6">
          <a href="#">
            <stats-card>
              <div slot="header" class="icon-danger">
                <Svg-Icon name="ico-portfolio" size="10" class="is-xlarge text-mutual-funds" />
              </div>
              <div slot="content">
                <p class="card-category">Mutual Funds</p>
                <h4 class="card-title">2.46 M</h4>
              </div>
              <div slot="footer">
                <!-- <i class="fa fa-clock-o"></i>Last day -->
                 <a href="#" target="_blank" class="learn-more">
                      View more<i class="fa fa-chevron-right"></i>
                  </a>
              </div>
            </stats-card>
          </a>
        </div>
      </div>
      <!-- ************************* End Port Value by Products ************************* -->
      <div class="row">
        <!-- ************************* Begin Asset Allocation & Live ************************* -->
        <div class="col-lg-6 col-md-12 col-sm-12" >
          <div class="row">
            <div class="col-12">
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
                  <hr />
                  <div class="stats">
                    <i class="fa fa-clock-o"></i> Yesterday
                  </div>
                </template>
              </chart-card>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <card>
                <template slot="header">
                  <h4 class="card-title">DBS Daily Focus LIVE</h4>
                </template>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    width="805"
                    height="453"
                    src="https://www.youtube.com/embed/hAepPuNxMB4"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </card>
            </div>
          </div>
        </div>
        <!-- ************************* End Asset Allocation & Live ************************* -->

         <!-- ************************* Begin Trade and Tools ************************* -->
        <div class="col-lg-6 col-md-12 col-sm-12" >
          <card>
            <template slot="header">
              <h4 class="card-title">Trade &amp; Tools</h4>
            </template>
            <div class="all-icons">
              <div class="row">
                <div class="font-icon-list col-md-4 col-sm-3 col-xs-12 mb-3">
                  <a href="#" target="_blank">
                    <div class="img-thumbnail text-center pt-4">
                      <img src="img/Streaming_Logo.png" class="app-logo" />
                      <p>Streaming</p>
                    </div>
                  </a>
                </div>
                <div class="font-icon-list col-md-4 col-sm-3 col-xs-12 mb-3">
                  <a href="#" target="_blank">
                    <div class="img-thumbnail text-center pt-4">
                      <img src="img/DigiS_Pro_Logo.png" class="app-logo" />
                      <p>DigiS Pro</p>
                    </div>
                  </a>
                </div>
                <div class="font-icon-list col-md-4 col-sm-3 col-xs-12 mb-3">
                  <a href="#" target="_blank">
                    <div class="img-thumbnail text-center pt-4">
                      <img src="img/WealthBOX_Logo.png" class="app-logo" />
                      <p>DBS WealthBOX</p>
                    </div>
                  </a>
                </div>
                <div class="font-icon-list col-md-4 col-sm-3 col-xs-12 mb-3">
                  <a href="#" target="_blank">
                    <div class="img-thumbnail text-center pt-4">
                      <img src="img/BrainBOX_TI_Logo.png" class="app-logo" />
                      <p>BrainBOX Technical Insight</p>
                    </div>
                  </a>
                </div>
                 <div class="font-icon-list col-md-4 col-sm-3 col-xs-12 mb-3">
                  <a href="#" target="_blank">
                    <div class="img-thumbnail text-center pt-4">
                      <img src="img/BrainBOX_VA_Logo.png" class="app-logo" />
                      <p>BrainBOX Value Analyzer</p>
                    </div>
                  </a>
                </div>
                <div class="font-icon-list col-md-4 col-sm-3 col-xs-12 mb-3">
                  <a href="#" target="_blank">
                    <div class="img-thumbnail text-center pt-4">
                      <img src="img/BrainBOX_Plus_Logo.png" class="app-logo" />
                      <p>BrainBOX Plus</p>
                    </div>
                  </a>
                </div>
                <div class="font-icon-list col-md-4 col-sm-3 col-xs-12 mb-3">
                  <a href="#" target="_blank">
                    <div class="img-thumbnail text-center pt-4">
                      <img src="img/MCycle_Logo.png" class="app-logo" />
                      <p>MCycle</p>
                    </div>
                  </a>
                </div>
                <div class="font-icon-list col-md-4 col-sm-3 col-xs-12 mb-3">
                  <a href="#" target="_blank">
                    <div class="img-thumbnail text-center pt-4">
                      <img src="img/BlockTradeCalculator_Logo.png" class="app-logo" />
                      <p>Block Trade Calculator</p>
                    </div>
                  </a>
                </div>
                  <div class="font-icon-list col-md-4 col-sm-3 col-xs-12 mb-3">
                  <a href="#" target="_blank">
                    <div class="img-thumbnail text-center pt-4">
                      <img src="img/DBSVOnline_Logo.png" class="app-logo" />
                      <p>DBSV Online</p>
                    </div>
                  </a>
                </div>
              </div>
              <hr />
              <h4 class="card-title pb-3">Partners Tools</h4>
              <div class="row">
                <div class="font-icon-list col-md-4 col-sm-3 col-xs-12 mb-3">
                  <a href="#" target="_blank">
                    <div class="img-thumbnail text-center pt-4">
                      <img src="img/eFinStockPickup_Logo.png" class="app-logo" />
                      <p>eFin StockPickup</p>
                    </div>
                  </a>
                </div>
                <div class="font-icon-list col-md-4 col-sm-3 col-xs-12 mb-3">
                  <a href="#" target="_blank">
                    <div class="img-thumbnail text-center pt-4">
                      <img src="img/Aspen4Browser_Logo.png" class="app-logo" />
                      <p>Aspen for Browser</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>
      <!-- ************************* Begin Trade and Tools ************************* -->
      


      <div class="row">
        <div class="col-md-6">
           <card>
            <template slot="header">
                 <h4 class="card-title">BrainBOX Plus Chart</h4>
            </template>
            <div class="card-body">
              <div class="text-right text-info">
                <i class="fa fa-clock-o"></i>Last Updated : 2020/07/20 22:36:20
              </div>
              <div>
                <a href="#" target="_blank">
                      <img src="/img/tmp/ChartBBP.png" style="width:100%" />
                </a>
              </div>
              
            </div>
            <div class="footer">
              <hr />
                <a href="#" target="_blank" class="text-danger">
                  Learn more<i class="fa fa-chevron-right"></i>
               </a>
            </div>
            </card>
        </div>

        <div class="col-md-6">
          <card>
            <template slot="header">
              <h4 class="card-title">Research Updates</h4>
            </template>
            <l-table :data="tableData.data" :columns="tableData.columns">
              <template slot="columns"></template>

              <template v-slot="{row}"><!-- <template slot-scope="{row}"> -->
                <td class="align-text-top w-25" >{{row.title}}<br>{{row.date}}</td>
                <td class="w-75">{{row.heading}}</td>
              </template>
            </l-table>
            <div class="footer">
              <hr />
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
import ChartCard from "src/components/Cards/ChartCard.vue";
import StatsCard from "src/components/Cards/StatsCard.vue";
import LTable from "src/components/Table.vue";
import SvgIcon from "src/components/Icons/Svg-Icon.vue";

export default {
  components: {
    LTable,
    ChartCard,
    StatsCard,
    SvgIcon
  },
  data() {
    return {
      editTooltip: "Edit Task",
      deleteTooltip: "Remove",
      pieChart: {
        data: {
          labels: ["25%", "10%", "18%", "47%"],
          series: [25, 10, 18, 47]
        }
      },
      tableData: {
        data: [
          {
            title:"HOT ISSUE",
            date:"1 July 2020",
            heading:"วันพรุ่งนี้ (22 ก.ค.) จะมีการประชุม ศบค.ชุดใหญ่ ที่มีพล.อ.ประยุทธ์ จันทร์โอชา นายกรัฐมนตรี ในฐานะผู้อำนวยการ ศบค.เป็นประธาน ซึ่งจะมีการหารือถึงแนวทางการผ่อนคลายมาตรการ ระยะที่ 6..."
          },
          {
            title:"HOT ISSUE",
            date:"1 July 2020",
            heading:"วันพรุ่งนี้ (22 ก.ค.) จะมีการประชุม ศบค.ชุดใหญ่ ที่มีพล.อ.ประยุทธ์ จันทร์โอชา นายกรัฐมนตรี ในฐานะผู้อำนวยการ ศบค.เป็นประธาน ซึ่งจะมีการหารือถึงแนวทางการผ่อนคลายมาตรการ ระยะที่ 6..."
          },
          {
            title:"HOT ISSUE",
            date:"1 July 2020",
            heading:"วันพรุ่งนี้ (22 ก.ค.) จะมีการประชุม ศบค.ชุดใหญ่ ที่มีพล.อ.ประยุทธ์ จันทร์โอชา นายกรัฐมนตรี ในฐานะผู้อำนวยการ ศบค.เป็นประธาน ซึ่งจะมีการหารือถึงแนวทางการผ่อนคลายมาตรการ ระยะที่ 6..."
          },
          {
            title:"HOT ISSUE",
            date:"1 July 2020",
            heading:"วันพรุ่งนี้ (22 ก.ค.) จะมีการประชุม ศบค.ชุดใหญ่ ที่มีพล.อ.ประยุทธ์ จันทร์โอชา นายกรัฐมนตรี ในฐานะผู้อำนวยการ ศบค.เป็นประธาน ซึ่งจะมีการหารือถึงแนวทางการผ่อนคลายมาตรการ ระยะที่ 6..."
          }
        ]
      }
    };
  }
};
</script>
<style>

</style>
