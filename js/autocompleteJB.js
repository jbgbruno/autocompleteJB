/**
 * Autocomplete para campo tipo input. deve ser utilizado jundo com o arquivo de mesmo nome .php
 */


class AutoCompleteJB{
    constructor() {

    }
    buscarDados(elemento, urlConsulta, elementoLista, elementoErroLimpar){
        let url = urlConsulta;

        $(elemento).keyup(function () {
            let q = $(this).val();
            if (q.length < 1) {
                return;
            }
            if (q != '') {
                $.ajax({
                    url: url,
                    method: "POST",
                    dataType: "html",
                    data: {q: q},
                    success: function (data) {
                        $(elementoLista).fadeIn();
                        $(elementoLista).html(data);
                    }
                });
            } else {
                $(elementoLista).fadeOut();
                let i = elementoErroLimpar.length;
                elementoErroLimpar.each(function (i) {
                    elementoErroLimpar[i].val('');
                })
                // $('#clienteBusca').val('');
                // $('#id_cliente').val('');
            }
        });
    }
}


