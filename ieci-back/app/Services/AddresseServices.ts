import Address from '../Models/Address'
import User from '../Models/User'
import PaidCourse from '../Models/PaidCourse'

interface AddressProps{
  cep:string
  city:string
  street:string
  state:string
  district:string
  adress_number:number
  complement:string
}

class AdressServices{

  async index() {
    const address = await Address.all()
    return address
  }

  async storeAddressCourse({
    cep,
    city,
    street,
    state,
    district,
    adress_number,
    complement
  }:AddressProps , currentUser:User | undefined,_response, id:number) {

    const address = await Address.create({
      cep,
      city,
      street,
      state,
      district,
      adress_number,
      complement
    })

    if(currentUser){

      const courseUser = await PaidCourse
      .query()
      .where('course_id',id)
      .where("user_id",currentUser.id)
      .first()

      if(courseUser){
        courseUser.address_id = address.id
        courseUser.save()
      }
    }

    return address

  }
}

export {AdressServices}


