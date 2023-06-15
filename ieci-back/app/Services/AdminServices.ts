import PaidCourse from '../Models/PaidCourse'


class AdminServices{

  async getUsers(status:string,order: 'asc' | 'desc') {
    const users = await PaidCourse
    .query()
    .preload('paidUser')
    .preload('paidCourse')
    .where((query) =>{
      if(status){
        query.where('status',status)
      }
    })
    .orderBy("id",`${order}`)

    return users
  }

  async getUser(id:number) {
    const paidCourse = await PaidCourse
    .query()
    .preload('paidUser')
    .preload('paidPersonalData')
    .preload('paidAddress')
    .preload('paidAcademicData')
    .where('id',id)
    .first()

    return paidCourse
  }

}

export { AdminServices }


