const mocha = require('mocha');
const chai = require('chai');
const url = require('../index');
const expect = chai.expect;

describe('url', function() {
  describe('#getLinksFromMd', function() {

    describe('Quando o campo estiver vazio.', function() {
      it('Retornar um campo vazio.', function() {
        expect(url.getLinksFromMd('Olá.')).to.be.an('array');
        expect(url.getLinksFromMd('Como vai.')).to.be.empty;
      });
    });

    describe('Quando houver uma url no campo', function() {
      describe('E conter HTTPS', function() {
        it('Retorna um campo contendo a url.', function() {
          expect(url.getLinksFromMd('Oi você que entrar no site (https://www.google.com)')).to.deep.equal(['https://www.google.com']);
        });
      });

      describe('E conter HTTP', function() {
        it('Retorna um campo contendo a url.', function() {
          expect(url.getLinksFromMd('Oi você que entrar no site (http://www.google.com)')).to.deep.equal(['http://www.google.com']);
        });
      });

      describe('E conter www', function() {
        it('Retorna um campo contendo a url e o link markdown.', function() {
          expect(url.getLinksFromMd('Oi você que entrar no site [google](www.google.com)?')).to.deep.equal([{href: 'www.google.com', text: 'google'}]);
        });
      });

      describe('E conter um domínio', function() {
        it('Retorna um campo contendo a url.', function() {
          expect(url.getLinksFromMd('Oi você que entrar no site (www.google.com)?')).to.deep.equal(['www.google.com']);
        });
      });
    });

    describe('E conter três urls', function() {
      it('Retorna um campo contendo as três urls.', function() {
        expect(url.getLinksFromMd('Oi você que entrar no site (www.google.com https://www.americanas.com.br www.natura.net )?')).to.deep.equal(['www.google.com', 'https://www.americanas.com.br', 'www.natura.net']);
      });
    });
  });
});
