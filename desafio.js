class Mapeamento {
    constructor (segmento) {
        this.segmento = segmento;
        this.rna =[]
    }

    conversao(dna) {
        dna.concat("")
        for (let sequencia of dna) {

        if (sequencia == "G") { sequencia = "C"
        this.rna.push(sequencia)
        } else if (sequencia == "C") { sequencia = "G"
        this.rna.push(sequencia)
        } else if (sequencia == "T") { sequencia = "A"
        this.rna.push(sequencia)
        } else {
            sequencia = "U"
            this.rna.push(sequencia)
            }
            this.rna.concat("")
        }
            return this.rna
    }

}

      
  
const sequencia1 = new Mapeamento ("GCTAAAAU")
console.log (sequencia1.conversao(sequencia1.segmento))
    