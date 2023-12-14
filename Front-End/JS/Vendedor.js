
var url= "http://localhost:8081/api/v1/vendedores/";
function listarVendedores(){

$.ajax({
    url:url,
    type:"GET",
    success: function(result){
        
        console.log(result);
        
        var cuerpoTabla= document.getElementById("cuerpoTabla");
       
        cuerpoTabla.innerHTML="";
        
        for (var i=0; i<result.length;i++) {
                
                var trRegistro=document.createElement("tr");
                let celdaIdVendedor=document.createElement("td");

                
                let celdaTipoDocumento = document.createElement ("td");
                let celdaNumeroDocumento =document.createElement ("td");
                let celdPrimerNombre =document.createElement ("td");
                let celdaSegundoNombre =document.createElement ("td");
                let celdaPrimerApellido =document.createElement ("td");
                let celdaSegundoApellido =document.createElement ("td");
                let celdaGenero =document.createElement ("td");
                let celdaFechaNacimiento =document.createElement ("td");
                let celdaTelefono =document.createElement ("td");
                let celdaCorreo =document.createElement ("td");
                let celdaDireccion =document.createElement ("td");
                let celdaNumeroSeguroSocial =document.createElement ("td");
                let celdaInformacionBancaria =document.createElement ("td");
                let celdaContactoEmergencia =document.createElement ("td");
                let celdaCertificaciones =document.createElement ("td");

            
            celdaId.innerText=result[i]["Id_Vendedor"];

            
            trRegistro.appendChild(celdaIdVendedor);
            trRegistro.appendChild(celdaTipoDocumento );
            trRegistro.appendChild(celdaNumeroDocumento );
            trRegistro.appendChild(celdaPrimerNombre );
            trRegistro.appendChild(celdaSegundoNombre );
            trRegistro.appendChild(celdaPrimerApellido );
            trRegistro.appendChild(celdaSegundoApellido );
            trRegistro.appendChild(celdaGenero );
            trRegistro.appendChild(celdaFechaNacimiento );
            trRegistro.appendChild(celdaTelefono );
            trRegistro.appendChild(celdaCorreo );
            trRegistro.appendChild(celdaDireccion );
            trRegistro.appendChild(celdaNumeroSeguroSocial );            
            trRegistro.appendChild(celdaInformacionBancaria ); 
            trRegistro.appendChild(celdaContactoEmergencia );            
            trRegistro.appendChild(celdaCertificaciones ); 
            
            cuerpoTabla.appendChild(trRegistro);

        }
    },
    error: function(error){
        
        alert("Error en la petición ${error}");

    }
});
}