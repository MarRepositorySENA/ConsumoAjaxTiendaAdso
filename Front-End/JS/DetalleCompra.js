var url= "http://localhost:8081/api/v1/detalles/compras/";
function listarDetalleCompras(){

$.ajax({
    url:url,
    type:"GET",
    success: function(result){
        
        console.log(result);
        
        var cuerpoTabla= document.getElementById("cuerpoTabla");
       
        cuerpoTabla.innerHTML="";
        
        for (var i=0; i<result.length;i++) {
                
                var trRegistro=document.createElement("tr");
                let celdaIdDetalleCompra=document.createElement("td");

                
                let celdaTipoDocumento = document.createElement ("td");
                let celdaIdProducto = document.createElement("td");                
                let celdaIdFacturaProveedor = document.createElement("td");
                let celdaDescuento = document.createElement("td");                
                let celdaImpuesto = document.createElement("td");
                let celdaFechaCompra = document.createElement("td");
                let celdaFechaEntrega = document.createElement("td");
                let celdaEstadoCompra = document.createElement("td");
                let celdaCantidad = document.createElement("td");
                let celdaPrecioUnitario = document.createElement("td");
                let celdaSubtotal = document.createElement("td");      
                let celdaMetodoPago = document.createElement("td"); 

            celdaId.innerText=result[i]["Id_Detalle_Compra"];

            
            trRegistro.appendChild(celdaIdDetalleCompra);
            trRegistro.appendChild(celdaIdProducto );            
            trRegistro.appendChild(celdaIdFacturaProveedor );
            trRegistro.appendChild(celdaDescuento );
            trRegistro.appendChild(celdaImpuesto );
            trRegistro.appendChild(celdaFechaCompra );
            trRegistro.appendChild(celdaFechaEntrega  );
            trRegistro.appendChild(celdaEstadoCompra );
            trRegistro.appendChild(celdaCantidad );
            trRegistro.appendChild(celdaPrecioUnitario );
            trRegistro.appendChild(celdaSubtotal );
            trRegistro.appendChild(celdaMetodoPago );









            
            cuerpoTabla.appendChild(trRegistro);

        }
    },
    error: function(error){
        
        alert("Error en la petición ${error}");

    }
});
}