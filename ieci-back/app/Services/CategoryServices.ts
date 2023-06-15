import Category from 'App/Models/Category'

interface CategoryProps{
  emblem:string
  name:string
}

class CategoryService {

  async index() {

    const categories = await Category
    .query()
    .preload('course')
    // .has('course')

    return categories
  }

  async store(name:string,emblem:any ) {
    if(emblem){
      await emblem.moveToDisk('./')
    }

    const category = await Category.create({
      name,
      emblem:emblem?.filePath,
    })

    return category
  }

  async show(id:string) {

    const category = await Category.find(id)
    return category
  }

  async update({name,emblem}:CategoryProps, id:string) {
    const category = await Category.find(id)

    if(category){
      category.name = name
      category.emblem = emblem

      await category.save()
    }

    return category
  }
}

export {CategoryService}


