import { afterEach, beforeEach, describe, expect, it } from '@jest/globals' 
import request from 'supertest'
import app from '../../app.js'

let server
  
beforeEach(() => {
	const port = 8000
	server = app.listen(port)
	console.log(`Servidor de testes porta ${port} ativo`)
})

afterEach(() => {
	server.close()
	console.log('Servidor de testes desativado')
})

describe('POST em /diretores', () => {
	it('Deve cadastrar um diretor novo', async () => {
		const resposta = await request(app)
			.post('/diretores')
			.send(
				{
					'name': 'teste',
					'img': 'teste',
					'country': 'teste'
				}
			)
			.expect(201)
			
			expect(resposta.body.message).toEqual('Diretor cadastrado com sucesso')
	})
})

let idTeste

describe('GET em /diretores', () => {
	it('Deve listar todos os diretores cadastrados', async () => {
		const resposta = await request(app)
			.get('/diretores')
			.expect(200)

			const index = resposta.body.length - 1
			idTeste = resposta.body[index]._id

			expect(resposta.body[0].name).toEqual('Peter Jackson')
	})
})

describe('GET em /diretores/id', () => {
	it('Deve mostrar informacoes do diretor pelo id', async () => {
		const resposta = await request(app)
			.get('/diretores/641607ccea9cb7f25fae3df6')
			.expect(200)

			expect(resposta.body.name).toEqual('Jeffrey Jacob Abrams')
	})
})


describe('PUT em /diretores', () => {
	it('Deve atualizar dados de um diretor', async () => {
		const resposta = await request(app)
			.put(`/diretores/${idTeste}`)
			.send(
				{
					'name': 'Atualizado',
					'img': 'Atualizado',
					'country': 'Atualizado'
				}
			)
			.expect(200)
			
			expect(resposta.body.message).toEqual('Diretor atualizado com sucesso')
	})
})

describe('DELETE em /diretores', () => {
	it('Deve apagar dados de um diretor', async () => {
		const resposta = await request(app)
			.delete(`/diretores/${idTeste}`)
			.expect(200)
			
			expect(resposta.body.message).toEqual(`Diretor id: ${idTeste}. Apagado com sucesso`)
	})
})



