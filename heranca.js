class Pessoa{
    Name
    Age
}

class trabalhador extends Pessoa{
    trabalho
    formacao
}

let P1 = new trabalhador
P1.Name = "Ana Clara"
P1.Age = 17
P1.trabalho = "Full-Stack"
P1.formacao = "Ads"

let P2 = new trabalhador
P2.Name = "Bruno Brito"
P2.Age = 16
P2.trabalho = "Back-end" 
P2.formacao = "Engenharia de Software"



let lista_Pessoa  = []
lista_Pessoa.push(P1,P2)
lista_Pessoa.push(trabalhador,Pessoa)

console.log(lista_Pessoa)
