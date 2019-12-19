import Api from '@/services/Api'

export default {
    post(ad) {
        return Api().post('createAd', ad)
    },
    index(search) {
        return Api().get('allAds', {params: {search: search}})
    },
    delete(id) {
        return Api().post('userAds', id)
    },
    edit(ad) {
        return Api().patch('editAd', ad)
    }
   /* index(search) {
        console.log(search)
        return Api().get('allAds', search)
    }*/
}