import request from '@/utils/request'

export default {
    
    
    //添加小节
    addVideo(eduVideo){
        return request({
            url: `/eduservice/eduvideo/addVideo`,
            method: 'post',
            data:eduVideo
          })
    },
    //根据id删除小节
    delVideo(id){
        return request({
            url: `/eduservice/eduvideo/delVideo/${id}`,
            method: 'delete'
          })
    },
    //根据id查询小节
    getVideoById(id){
        return request({
            url: `/eduservice/eduvideo/getVideoById/${id}`,
            method: 'get'
          })
    },
    //修改小节
    updateVideo(eduVideo){
        return request({
            url: `/eduservice/eduvideo/updateVideo`,
            method: 'post',
            data:eduVideo
          })
    },

    //删除视频
    delVideoList(id){
        return request({
            url:`/eduservice/eduvideo/delVideoList/${id}`,
            method:'delete'
        })
    }

}