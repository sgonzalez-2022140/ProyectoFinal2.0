'use strict'

//nuestro modelo
import Purchase from '../purchase/purchase.model.js'

import Product from '../products/product.model.js'

export const purchaseAdd = async(req, res)=>{
    try {
        //capturar la data
        let data = req.body;
        data.user = req.user._id //aqui necesitamos el token cuando se logea
        //Verificar que exista el producto
        
        console.log("Product ID:", typeof(data.product));
        //tengo un error aqui ya que se pone como String
        let product = await Product.findOne({ _id: data.product });
        
        if(!product) return res.status(404).send({message: 'Product not found'})
        //Validar que tengamos productos en stock
        let inStock = await Product.findOne({ _id: product.stock})
        if(inStock === 0) return res.status(404).send({message: 'We dont have this product Right Now'})

        //Guardar
        let purchase = new Purchase(data)
        await purchase.save()
        return res.send({message: `Purchase successfully, for the date ${purchase.date}`})
    }catch (err) {
     console.error(err)  
     return res.status(500).send({message: 'Error creating a purchase', err}) 
    }
}