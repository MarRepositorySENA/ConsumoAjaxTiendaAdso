var url= "http://localhost:8081/api/v1/detalles/ventas/";
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
                let celdaIdDetalleVenta=document.createElement("td");

                
                let celdaIdFacturaCliente = document.createElement ("td");
                let celdaIdVenta = document.createElement("td");         
                let celdaIdProducto = document.createElement("td");
                let celdaCantidad = document.createElement("td");
                let celdaPrecioUnitario = document.createElement("td");
                let celdaSubtotal = document.createElement("td");
                let celdaMetodoPago = document.createElement("td");
                let celdaDescuentoAplicado = document.createElement("td");


            celdaId.innerText=result[i]["Id_Detalle_Venta"];

            
            
            trRegistro.appendChild(celdaIdDetalleVenta);
            trRegistro.appendChild(celdaIdFacturaCliente );            
            trRegistro.appendChild(celdaIdVenta );            
            trRegistro.appendChild(celdaIdProducto );
            trRegistro.appendChild(celdaCantidad );
            trRegistro.appendChild(celdaPrecioUnitario );
            trRegistro.appendChild(celdaSubtotal );
            trRegistro.appendChild(celdaMetodoPago );
            trRegistro.appendChild(celdaDescuentoAplicado );

            
            cuerpoTabla.appendChild(trRegistro);

        }
    },
    error: function(error){
        
        alert("Error en la petición ${error}");

    }
});
}