<template>
  <div class="app-container">
    <el-card>
                <div class="titleitem">
                  <span >工作/学习经历</span>
                </div>
                <el-table
                  :data="experienceData" border @selection-change="handleSelectionChange"
                  stripe
                  style="width: 100%">
                  <el-table-column type="selection"></el-table-column> 
                  <el-table-column
                    prop="starttime"
                    label="开始时间"
                    width="260">
                    <template slot-scope="scope">
                      <el-date-picker
                        type="month"
                        size="small"
                        placeholder="选择年月"
                        v-model="scope.row.starttime">
                      </el-date-picker>
                      <!-- <el-input></el-input> -->
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="endtime"
                    label="结束时间"
                    width="260">
                    <template slot-scope="scope">
                      <el-date-picker
                        type="month"
                        size="small"
                        placeholder="选择年月"
                        v-model="scope.row.endtime">
                      </el-date-picker>
                      <!-- <el-input v-model="scope.row.endtime"></el-input> -->
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="resume"
                    label="简历"
                    width="380">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.resume"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="operate"
                    label="操作">   
                    <template slot-scope="scope">
                      <!--<el-button 
                        size="mini" 
                        type="success" 
                        icon="el-icon-save" 
                        @click="handlesaveExperience(scope.$index, scope.row)">保存
                      </el-button> -->
                      <el-button 
                        size="mini" 
                        type="danger" 
                        icon="el-icon-delete" 
                        @click="handleDeleteExperience(scope.$index, scope.row)">删除
                      </el-button>
                      
                    </template>                
                  </el-table-column>            
                </el-table>
                <div style="text-align:center">
                  <el-button 
                        size="mini" 
                        type="success" 
                        icon="el-icon-save" 
                        @click="handlesaveExperience">保存
                      </el-button>
                </div>
                <div>
                  <el-button 
                    type="primary" 
                    icon="el-icon-plus" 
                    size="mini" 
                    @click="handleAddExperienceline">新增学习/工作简历
                  </el-button>
                </div>
              </el-card>
              <el-card>
                <div class="titleitem">
                  <span >奖惩情况</span>
                </div>
                <el-table
                  :data="bonuspenaltyData"
                  stripe
                  style="width: 100%">
                  <el-table-column
                    prop="status"
                    label="奖励/惩罚"
                    width="100">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.status"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="date"
                    label="奖惩年月"
                    width="260">
                    <template slot-scope="scope">
                      <el-date-picker
                        type="month"
                        size="small"
                        placeholder="选择年月"
                        v-model="scope.row.date">
                      </el-date-picker>
                      <!-- <el-input></el-input> -->
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="num"
                    label="奖惩文号"
                    width="180">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.num"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="remarks"
                    label="备注"
                    width="360">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.remarks"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="operate"
                    label="操作">   
                    <template slot-scope="scope">
                      <el-button 
                        size="mini" 
                        type="success" 
                        icon="el-icon-save" 
                        @click="handlesaveBonuspenalt(scope.$index, scope.row)">保存
                      </el-button>
                      <el-button 
                        size="mini" 
                        type="danger" 
                        icon="el-icon-delete" 
                        @click="handleDeleteBonuspenalt(scope.$index, scope.row)">删除
                      </el-button>                      
                    </template>                
                  </el-table-column>            
                </el-table>
                <div>
                  <el-button 
                    type="primary" 
                    icon="el-icon-plus" 
                    size="mini" 
                    @click="handleAddBonuspenaltLine">新增奖惩情况
                  </el-button>
                </div>
              </el-card>

              <el-card>
                <div class="titleitem">
                  <span >年度考核</span>
                </div>
                <el-table
                  :data="AnnualAssessmentData"
                  stripe
                  style="width: 100%">
                  <el-table-column
                    prop="year"
                    label="年度"
                    width="260">
                    <template slot-scope="scope">
                      <el-date-picker
                        type="year"
                        size="small"
                        placeholder="选择年"
                        v-model="scope.row.year">
                      </el-date-picker>
                      <!-- <el-input v-model="scope.row.year"></el-input> -->
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="result"
                    label="结果"
                    width="260">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.result"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="remarks"
                    label="备注"
                    width="380">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.remarks"></el-input>
                    </template>
                  </el-table-column>            
                  <el-table-column
                    prop="operate"
                    label="操作">   
                    <template slot-scope="scope">
                      <el-button 
                        size="mini" 
                        type="success" 
                        icon="el-icon-save" 
                        @click="handlesaveAnnualAssessment(scope.$index, scope.row)">保存
                      </el-button>
                      <el-button 
                        size="mini" 
                        type="danger" 
                        icon="el-icon-delete" 
                        @click="handleDeleteAnnualAssessment(scope.$index, scope.row)">删除
                      </el-button>                      
                    </template>                
                  </el-table-column>            
                </el-table>
                <div>
                  <el-button 
                    type="primary" 
                    icon="el-icon-plus" 
                    size="mini" 
                    @click="handleAddAnnualAssessmentLine">新增年度考核
                  </el-button>
                </div>
              </el-card>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  
  data() {
    return {
      workExperDate:[],
      options:[],
      value:'',
      value1:'',
      month1:'',
      month2:'',
      experienceData: [{
          starttime: '1996-05',
          endtime: '1999-06',
          resume: '就读于xxxx学习xxxx专业',
        }, ],
      bonuspenaltyData:[{
        status:'奖励',
        date:'2022-05',
        num:'123456',
        remarks:'助人为乐'
      }],
      AnnualAssessmentData: [{
        year:'2021',
        result:'合格',
        remarks:'考核通过',
      }],
    }
  },

  created() {
   this.experienceData.map(i => {
                i.show = false
                return i
            })
  },

  methods: {
    //增加经验行
    handleAddExperienceline() {
      if (this.experienceData == undefined) {
        this.experienceData = new Array();
      }
      let obj = {};
      
      this.experienceData.push(obj);
    },
    //保存经验行
    handlesaveExperience() {
      this.experienceData.map((i, index) => {
        i.show = false
        Vue.set(this.experienceData, index, i)
          }),
        this.workExperDate = this.experienceData;
        console.info(this.workExperDate)
    },
    //删除经验行
    handleDeleteExperience(index) {
      console.log(index);
			this.experienceData.splice(index, 1)
    },

    //增加奖惩行
    handleAddBonuspenaltLine() {
      if (this.bonuspenaltyData == undefined) {
        this.bonuspenaltyData = new Array();
      }
      let obj = {};
      
      this.bonuspenaltyData.push(obj);
    },
    //保存奖惩行
    handlesaveBonuspenalt(a, b) {
      console.log(a + b);
    },
    //删除奖惩行
    handleDeleteBonuspenalt(index) {
      console.log(index);
			this.bonuspenaltyData.splice(index, 1)
    },

    //增加年度考核行
    handleAddAnnualAssessmentLine() {
      if (this.AnnualAssessmentData == undefined) {
        this.AnnualAssessmentData = new Array();
      }
      let obj = {};
      
      this.AnnualAssessmentData.push(obj);
    },
    //保存年度考核行
    handlesaveAnnualAssessment(a, b) {
      console.log(a + b);
    },
    //删除年度考核行
    handleDeleteAnnualAssessment(index) {
      console.log(index);
			this.AnnualAssessmentData.splice(index, 1)
    },

     //多选
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>
