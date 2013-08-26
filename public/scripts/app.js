$(function() {
    var tpls = {
        input: _.template($("#subtpl-formField-input").html()),
        textarea: _.template($("#subtpl-formField-textarea").html()),
        options: _.template($("#subtpl-formField-options").html()),
    };

    // form client
    var form = new Form(tpls);

    form.addFields(
        [ 'text', 'nome', 'Nome' ],
        [ 'text', 'telefone', 'Telefone' ],
        [ 'text', 'celular', 'Celular' ],
        [ 'textarea', 'endereco', 'Endereco' ],
        [ 'radio', 'sexo', 'Sexo', [ [ 'Feminino' ], [ 'Masculino' ] ] ],
        [ 'checkbox', 'servicos', 'Servicos', [
            'Modeladora', 'Drenagem', 'Relaxante',
            'Depilacao', 'Limpeza de Pele', 'Manicure e Pedicure'
        ] ]
    );

    form.render("#clientForm .form-fields");                
    
    // form corporal
    var fichaCorporal = new Form(tpls);

    fichaCorporal.addFields(
        [ 'radio', 'permaneceMuitoTempoSentada', 'Permanece muito tempo sentada?',
            [ 'Sim', 'Nao'] ],
        [ 'radio', 'antecedentesCirurgicos', 'Possui antecedentes cirurgicos?', 
            [ 'Sim', 'Nao' ], 'Quais?' ],
        [ 'radio', 'tratamentoEstetcoAnterior', 'Tratamento Estetico Anterior?', 
            [ 'Sim', 'Nao' ], 'Qual?' ],
        [ 'radio', 'antecedentesAlergicos', 'Antecedentes alergicos?', [ 'Sim', 'Nao' ], 'Quais?' ],
        [ 'radio', 'funcionamentoIntestinalRegular', 'Funcionamento intestinal regular?',
            [ 'Sim', 'Nao' ], 'Obs...' ],
        [ 'radio', 'praticaAtividadeFisica', 'Pratica atividade física?', [ 'Sim', 'Nao' ], 'Quais?' ],

        [ 'radio', 'fumante', 'Fumante?', [ 'Sim', 'Nao' ] ],

        [ 'radio', 'alimentacaoBalanceada', 'Alimentacao Balanceada?', [ 'Sim', 'Nao' ], 'Tipo?' ],

        [ 'radio', 'liquidosFrequencia', 'Ingere linquidos com frequencia?', [ 'Sim', 'Nao' ], 'Quanto?' ],

        [ 'radio', 'gestante', 'Gestante?', [ 'Sim', 'Nao' ] ],

        [ 'radio', 'filhos', 'Tem filhos?', [ 'Sim', 'Nao' ], 'Quantos?' ],

        [ 'radio', 'problemaOrtopedico', 'Tem algum problema ortopedico?', [ 'Sim', 'Nao' ], 'Qual?' ],

        [ 'radio', 'tratamentoMedico', 'Faz algum tratamento medico?', [ 'Sim', 'Nao' ], 'Qual?' ],

        [ 'radio', 'acidosPele', 'Usa ou ja usou algum acido na pele?', [ 'Sim', 'Nao' ], 'Quais?' ],

        [ 'radio', 'tratamentoOrtomelecular', 'Ja fez algum tratamento ortomelecular?', [ 'Sim', 'Nao' ], 'Qual?' ],

        [ 'radio', 'marcapasso', 'Portador de marcapasso?', [ 'Sim', 'Nao' ], 'Qual?' ],

        [ 'radio', 'metais', 'Presenca de metais?', [ 'Sim', 'Nao' ], 'Onde?' ],

        [ 'radio', 'cicloMestrual', 'Ciclo mestrual regular?', [ 'Sim', 'Nao' ], 'Obs.' ],

        [ 'radio', 'anticoncepcional', 'Uso de anticoncepcional?', [ 'Sim', 'Nao' ], 'Qual?' ],

        [ 'radio', 'varizes', 'Varizes?', [ 'Sim', 'Nao' ], 'Grau?' ],

        [ 'radio', 'lesoes', 'Lesoes?', [ 'Sim', 'Nao' ], 'Quais?' ],

        [ 'radio', 'hipertensao', 'Hipertensao?', [ 'Sim', 'Nao' ] ],

        [ 'radio', 'hipotensao', 'Hipotensao?', [ 'Sim', 'Nao' ] ],

        [ 'radio', 'diabete', 'Diabetes?', [ 'Sim', 'Nao' ] ],

        [ 'radio', 'epilepsia', 'Epilepsia?', [ 'Sim', 'Nao' ] ],

        [ 'checkbox', 'alimentacao', 'Alimentacao', [ 'Doce', 'Congelados', 'Verdura', 'Fibra' ] ],

        [ 'radio', 'apetite', 'Apetite', [ 'Pouco', 'Muito', 'Mais ou Menos'] ],

        [ 'radio', 'alcool', 'Alcool', [ 'Pouco', 'Muito', 'Moderado', 'Nao'] ] 

    );

    fichaCorporal.render("#clientForm .fichas .corporal .content");


    // handler 
    var corporalFields = [ 'Modeladora', 'Drenagem', 'Relaxante' ];
    $("form").on("change", "label.btn input[name='servicos']", function (ev) {
        var val = $(ev.target).val();
        var corporal = 0;

        $("input[name='servicos']:checked").each(function (index, e) {
            var el = $(e);
            if ($.inArray(el.val(), corporalFields) !== -1) {
                corporal++;
            }
        });
        if ($.inArray(val, corporalFields) !== -1) {
            if (corporal === 0) {
                $(".fichas .corporal").slideUp();
            } else {
                $(".fichas .corporal").slideDown();
            }
        }

        if (val == 'Limpeza de Pele') {
            $(".fichas .limpeza").slideToggle();
        }
        if (val == "Depilacao") {
            $(".fichas .depilacao").slideToggle();
        }
    });

});
