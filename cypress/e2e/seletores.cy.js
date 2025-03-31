///<reference types = "cypress"/>

describe('Seletores avançados com cypress', () => {

  beforeEach(() => {
    cy.visit('../../seletores.html') //visitando o arquivo e não a página de fato
  });

  it('Seleciona elementos que contêm um Texto específico', () => {
    cy.contains('Item 3').should('have.attr', 'class', 'filho-3')
  });
    
  it('Seleciona o elemento com a classe pai', () => {
    cy.get('.pai').should('exist') 
    /* o . é porque o item "pai" é uma classe. 
      A ul fica dentro desse item e dentro da ul ficam os itens filhos */
  });

  it('Seleciona o elemento com o id Filho', () => {
    cy.get('#id-filho').should('exist') 

  });

  it('Seleciona um elemento filho dentro do elemento com a classe pai', () => {
    cy.get('.pai').find('.filho-2').should('contain', 'Item 2')
    /* O método find é utilizado para encontrar um elemento dentro de outro.
      Nesse caso, o elemento com a classe pai contém um elemento com a classe filho-2
      e o método find é utilizado para encontrar esse elemento filho-1 dentro do pai.
      Item 2 é apenas o texto dentro do .filho-2
      */
  });

  it('Seleciona o segundo elemento <span> com a classe irmao', () => {
    cy.get('.irmao + .irmao').should('contain', 'Irmão 2')  
    /* O método eq é utilizado para selecionar um elemento específico de um conjunto de elementos.
      Nesse caso, o elemento com a classe irmao contém 2 elementos com a mesma classe e o método eq
       é utilizado para selecionar o segundo elemento.
      */
  });

  it('Seleciona o próximo elemento irmão', () => {
    cy.get('#irmao-1').next().should('contain', 'Irmão 2')
    /* O método next é utilizado para selecionar o próximo elemento irmão de um elemento.
      Nesse caso, são dois elementos com a mesma classe .irmao. Utilizando o método next, selecionei o próximo elemento
      sem precisar especificar a classe.
      */
  });

  it('Seleciona o elemento irmão anterior', () => {
    cy.get('#irmao-2').prev().should('contain', 'Irmão 1')
    /* O método prev é utilizado para selecionar o elemento irmão anterior de um elemento.
      Nesse caso, são dois elementos com a mesma classe .irmao. Utilizando o método prev, selecionei o elemento anterior
      sem precisar especificar a classe.
      */
  });

  it('Seleciona o irmão da div anterior', () => {
    cy.get('[name="nome-do-atributo"]').prev().should('contain', 'Item 1')
    /* utilizando o name do atributo para selecionar o elemento irmão anterior que está dentro do atributo.
     */
  });

  it('Seleciona o terceiro elemento <li> encontrado', () => {
    cy.get('li').eq(2).should('have.text', 'Item 3')
    /* have.text é utilizado para verificar o texto do elemento.
      O método eq é utilizado para selecionar um elemento específico de um conjunto de elementos.
      Nesse caso, é o terceiro elemento de uma ul encontrado como li.
     */
  });

  it('Seleciona o elemento com o atributo data-test', () => {
    cy.get('[data-test="div-pai"]').should('exist')
      /*Toda vez que trabalhar com elemento inteiro, é necessário utilizar [] para indicar que é um atributo. 
       */
  });

  it('Seleciona o elemento com a classe pai do elemento com a classe filho', () => {
    // cy.get('.filho-4').parents('.pai').should('exist')
    cy.get('.filho-4').parents('[data-test="div-pai"]').should('have.attr', 'class', 'pai')
    /* O método parents é utilizado para selecionar o elemento pai de um elemento.
      Nesse caso, o elemento com a classe filho-4 contém um elemento pai com a classe pai 
      e o método parents é utilizado para selecionar esse elemento pai.
      */  
  });

  it('Seleciona o elemento com um valor em um select', () => {
    cy.get('[name="opcao"]').select('medio')
    cy.get('#id-enviar').click()
    cy.get('#mensagemFeedback').should('have.text', 'Obrigado por compartilhar conosco!')
    /* O método select é utilizado para selecionar um valor em um elemento select.
      Nesse caso, o valor 'Opção 2' é selecionado e o método should é utilizado para verificar se o valor selecionado é '2'.
      */
  });

})