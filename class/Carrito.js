export class Carrito{
    items=[];
    constructor(){
    }

    getItems(){
        return this.items
    }

    setItem(producto){
        let quant = 1;
        if (producto.cantidad != undefined){
            quant = producto.cantidad;
        }

        let item =
            {
                id: producto.id,
                nombre : producto.nombre,
                precio : producto.precio,
                cantidad : quant,
                etiqueta : producto.etiqueta,
                link : producto.link,
                stock : producto.stock,
                descripcion : producto.descripcion,
                idCategoria : 13,
                idSucursal : 3
            }

        let existe = false;

        this.items.forEach(el => {
            if (el.id == item.id){
                if (el.stock > el.cantidad){
                el.cantidad++;
            } else {
                el.cantidad = el.stock
            }
            existe = true;
            }
        })

        if (!existe) {
        this.items.push(item)}
    }

    ajustarCantidad(id , cant){

        if (cant <= 0) {
            cant=1;
        }


        this.items.forEach(el => {
            if (el.id == id){
                if (cant > el.stock){
                    cant=el.stock
                    el.cantidad = cant;
                    document.querySelector('.mensaje-stock').classList.remove('d-none');

                    setTimeout(() => {
                        document.querySelector('.mensaje-stock').classList.add('d-none');
                    }, 1500)
                }
                el.cantidad = cant;
            }
        })
    }


    removeItem(id){
        const filtrado = this.items.filter(el => el.id != id)
        this.items = filtrado
    }

    vaciarCarrito(){
        this.items = [];
    }

    getItembyID(id){
        return this.items.find(el => el.id == id)
    }
} 