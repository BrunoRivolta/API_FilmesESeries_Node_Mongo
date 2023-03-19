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

describe('POST em /canais', () => {
	it('Deve cadastrar um canal novo', async () => {
		const resposta = await request(app)
			.post('/canais')
			.send(
				{
					'name': 'teste',
					'img': 'teste'
				}
			)
			.expect(201)
			
			expect(resposta.body.message).toEqual('Canal cadastrado com sucesso')
	})
})

let idTeste

describe('GET em /canais', () => {
	it('Deve listar todos os canais cadastrados', async () => {
		const resposta = await request(app)
			.get('/canais')
			.expect(200)

			const index = resposta.body.length - 1
			idTeste = resposta.body[index]._id

			expect(resposta.body[0].name).toEqual('Prime Video')
	})
})

describe('GET em /canais/id', () => {
	it('Deve mostrar informacoes do canal pelo id', async () => {
		const resposta = await request(app)
			.get('/canais/6414528578f61fcff0e43273')
			.expect(200)

			expect(resposta.body.name).toEqual('Star+')
	})
})


describe('PUT em /canais', () => {
	it('Deve atualizar dados de um canal', async () => {
		const resposta = await request(app)
			.put(`/canais/${idTeste}`)
			.send(
				{
					'name': 'Atualizado',
					'img': 'Atualizado'
				}
			)
			.expect(200)
			
			expect(resposta.body.message).toEqual('Canal atualizado com sucesso')
	})
})

describe('DELETE em /canais', () => {
	it('Deve apagar dados de um canal', async () => {
		const resposta = await request(app)
			.delete(`/canais/${idTeste}`)
			.expect(200)
			
			expect(resposta.body.message).toEqual(`Canal id: ${idTeste}. Apagado com sucesso`)
	})
})



