import request from '@/utils/request'

export default {
    getTeacherPageVo(current,limit,teacherQuery){
        return request({
            url: `/eduservice/eduteacher/getTeacherPageVo/${current}/${limit}`,
            method: 'post',
            data: teacherQuery  //转化json传递
          })
    },

    //讲师删除根据讲师id
    delTeacher(id){
        return request({
            url:`/eduservice/eduteacher/${id}`,
            method:'delete'
        })
    },

    //添加讲师
    addTeacher(eduTeacher){
        return request({
            url:`/eduservice/eduteacher/addTeacher`,
            method:'post',
            data: eduTeacher  //转化json传递
        })
    },

    //查询讲师信息byid
    getTeacherById(id){
        return request({
            url:`/eduservice/eduteacher/getTeacherById/${id}`,
            method:'get'
        })
    },

    //修改讲师信息
    updateTeacher(eduTeacher){
        return request({
            url:`/eduservice/eduteacher/updateTeacher`,
            method:'post',
            data: eduTeacher
        })
    },
     //所有讲师列表
     getAllTeacher(){
        return request({
            url: `/eduservice/eduteacher`,
            method: 'get'
          })
    }




}
