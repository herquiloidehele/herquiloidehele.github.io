
    function contarMeses(dataInicio, dataFim) {
        let meses;

        console.log("Calculo de Meses")
        meses = (dataFim.getFullYear() - dataInicio.getFullYear()) * 12;
        meses -= dataInicio.getMonth() - 1;
        meses += dataFim.getMonth() - 1;

        if(meses <= 0 ){
            return "( 0 Meses )";
        }else if(meses === 1){
            return "( 0 Anos e 1 Mês )";
        }else if(meses < 12){
            return "( 0 Anos e " + meses + " Meses )";
        }else {
            return "( " + Math.round(meses/12) + " Anos e " + meses%12 + " Meses )" ;
        }
    }


    let tempoDalima = document.getElementById('tempo_dalima');
    let tempoSiko = document.getElementById('tempo_siko');
    let tempoFSD = document.getElementById('tempo_fsd');
    let tempoUEM = document.getElementById('tempo_uem');


    tempoDalima.innerText = (contarMeses(new Date(2019, 5, 10), new Date()).toUpperCase());
    tempoFSD.innerText = (contarMeses(new Date(2018, 8, 10), new Date()).toUpperCase());
    tempoSiko.innerText = (contarMeses(new Date(2016, 4, 10), new Date()).toUpperCase());
    tempoUEM.innerText = (contarMeses(new Date(2017, 1, 10), new Date(2018, 12, 1)).toUpperCase());

