
$("#form").validate(
    {
    rules: {
        "txtEmail": {
            required:true,
            email:true
        },
        "txtNombre":{
            required:true,
		},
		"txtFechaNaci":{
			
		}
    },
    messages:{
        "txtEmail": {
            required: "Ingrese un email",
            email:"ingrese un email valido"
        }
    }
}
);

$('#txtNombre').bind('keyup blur',function(){ 
    var node = $(this);
	node.val(node.val().replace(/[^a-zA-Z ]/g ,'')
	 );
	  }
	
);

$('#txtRun').keypress(function(e) {
    var tval = $('#txtRun').val(),
        tlength = tval.length,
        set = 13,
        remain = parseInt(set - tlength);
    $('p').text(remain);
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('#txtRun').val((tval).substring(0, tlength - 1));
        return false;
    }
})






// formateará el RUT cada vez que se escriba en el campo y
// validará cuando el texto haya cambiado
$("input#txtRun").rut({
	formatOn: 'keydown',
	minimumLength: 8,
	maximumLength: 10, // validar largo mínimo; default: 2
	validateOn: 'change' // si no se quiere validar, pasar null
});

// es posible pasar varios eventos separados por espacio, útil
// para validar el rut aún cuando el browser autocomplete el campo
$("input#txtRun").rut({validateOn: 'change keyup'});

// si no se quiere mostrar el punto para separador de miles, 
// pasar la opción useThousandsSeparator : false
$("input#txtRun").rut({useThousandsSeparator : false}); //formateará '145694841' como '14569484-1'

$(function() {
    $("#txtRun").rut().on('rutValido', function(e, txtRun, dv) {
        alert("El rut " + txtRun + "-" + dv + " es correcto");
    }, { minimumLength: 7} );
})



function setInputFilter(textbox, inputFilter) {
	["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
	  textbox.addEventListener(event, function() {
		if (inputFilter(this.value)) {
		  this.oldValue = this.value;
		  this.oldSelectionStart = this.selectionStart;
		  this.oldSelectionEnd = this.selectionEnd;
		} else if (this.hasOwnProperty("oldValue")) {
		  this.value = this.oldValue;
		  this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
		}
	  });
	});
  }
  
  // Restrict input to digits and '.' by using a regular expression filter.
  setInputFilter(document.getElementById("txtFono"), function(value) {
	return /^\d*\.?\d*$/.test(value);
  });
  setInputFilter(document.getElementById("txtNombre"), function(value) {
	return /^[a-z ]*$/g.test(value);
  });

function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
	return Math.abs(ageDate.getUTCFullYear() - 1970),
	console.log('meep');
}



var myobject = {
    ValueA : '',
    ValueB : 'Casa con patio pequeño',
	ValueC : 'Casa sin patio',
	ValueD : 'Departamento',
	ValueE : 'Casa con patio  grande'
	
};



var select = document.getElementById("vivienda");
for(index in myobject) {
    select.options[select.options.length] = new Option(myobject[index], index);
}


var RegionesYcomunasYciudades = {

	"regiones": [{
			"NombreRegion": "Arica y Parinacota",
            "comunas": ["Arica", "Camarones", "Putre", "General Lagos"],
            "ciudades":["Arica","Putre"]
	},
		{
			"NombreRegion": "Tarapacá",
            "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
            "ciudades":[]
	},
		{
			"NombreRegion": "Antofagasta",
            "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
            "ciudades":[]
	},
		{
			"NombreRegion": "Atacama",
            "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
            "ciudades":[]
	},
		{
			"NombreRegion": "Coquimbo",
            "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
            "ciudades":[]
	},
		{
			"NombreRegion": "Valparaíso",
            "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
            "ciudades":[]
	},
		{
			"NombreRegion": "Región del Libertador Gral. Bernardo O’Higgins",
			"comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
	},
		{
			"NombreRegion": "Región del Maule",
			"comunas": ["Talca", "ConsVtución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
	},
		{
			"NombreRegion": "Región del Biobío",
			"comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
	},
		{
			"NombreRegion": "Región de la Araucanía",
			"comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria", ]
	},
		{
			"NombreRegion": "Región de Los Ríos",
			"comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
	},
		{
			"NombreRegion": "Región de Los Lagos",
			"comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
	},
		{
			"NombreRegion": "Región Aisén del Gral. Carlos Ibáñez del Campo",
			"comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
	},
		{
			"NombreRegion": "Región de Magallanes y de la AntárVca Chilena",
			"comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
	},
		{
			"NombreRegion": "Región Metropolitana de Santiago",
			"comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
	}]
}


$(document).ready(function () {

	var iRegion = 0;
	var htmlRegion = '<option value="sin-region">Seleccione región</option><option value="sin-region">--</option>';
    var htmlComunas = '<option value="sin-region">Seleccione comuna</option><option value="sin-region">--</option>';
    var htmlCiudades = '<option value="sin-region">Seleccione ciudad</option><option value="sin-region">--</option>';

	jQuery.each(RegionesYcomunasYciudades.regiones, function () {
		htmlRegion = htmlRegion + '<option value="' + RegionesYcomunasYciudades.regiones[iRegion].NombreRegion + '">' + RegionesYcomunasYciudades.regiones[iRegion].NombreRegion + '</option>';
		iRegion++;
	});

	jQuery('#regiones').html(htmlRegion);
    jQuery('#comunas').html(htmlComunas);
    jQuery('#ciudades').html(htmlCiudades);

	jQuery('#regiones').change(function () {
		var iRegiones = 0;
        var valorRegion = jQuery(this).val();
        var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';
        var htmlCiudad = '<option value="sin-ciudad">Seleccione ciudad</option><option value="sin-ciudad">--</option>';
		jQuery.each(RegionesYcomunasYciudades.regiones, function () {
			if (RegionesYcomunasYciudades.regiones[iRegiones].NombreRegion == valorRegion) {
                var iComunas = 0;
				jQuery.each(RegionesYcomunasYciudades.regiones[iRegiones].comunas, function () {
					htmlComuna = htmlComuna + '<option value="' + RegionesYcomunasYciudades.regiones[iRegiones].comunas[iComunas] + '">' + RegionesYcomunasYciudades.regiones[iRegiones].comunas[iComunas] + '</option>';
					iComunas++;
                });
			}
			iRegiones++;
        });
        jQuery('#comunas').html(htmlComuna);

        var iRegiones = 0;
        var valorRegion = jQuery(this).val();
        var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';
        var htmlCiudad = '<option value="sin-ciudad">Seleccione ciudad</option><option value="sin-ciudad">--</option>';

        jQuery.each(RegionesYcomunasYciudades.regiones, function () {
			if (RegionesYcomunasYciudades.regiones[iRegiones].NombreRegion == valorRegion) {
                var iCiudades = 0;
				jQuery.each(RegionesYcomunasYciudades.regiones[iRegiones].ciudades, function () {
					htmlCiudad = htmlCiudad + '<option value="' + RegionesYcomunasYciudades.regiones[iRegiones].ciudades[iCiudades] + '">' + RegionesYcomunasYciudades.regiones[iRegiones].ciudades[iCiudades] + '</option>';
					iCiudades++;
                });
			}
			iRegiones++;
        });
        
        
        jQuery('#ciudades').html(htmlCiudad);
    });
    

	jQuery('#comunas').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Región');
		} else if (jQuery(this).val() == 'sin-comuna') {
			alert('selecciones Comuna');
		}
	});
	jQuery('#regiones').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Región');
		}
    });
    jQuery('#ciudades').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Ciudad');
		}
	});
    

});