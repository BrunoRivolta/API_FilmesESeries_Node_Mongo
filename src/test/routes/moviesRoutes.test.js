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

describe('POST em /filmes', () => {
	it('Deve cadastrar um filme novo', async () => {
		const resposta = await request(app)
			.post('/filmes')
			.send(
				{
					'name': 'teste',
					'year': 2023,
					'img': 'teste',
					'director_id': '6412f585ffce6c642286c084',
					'channel_id': '6412f5e1ffce6c642286c085',
					'type': 'serie'
				}
			)
			.expect(201)
			
			expect(resposta.body.message).toEqual('Filme cadastrado com sucesso')
	})
})

let idTeste

describe('GET em /filmes', () => {
	it('Deve listar todos os filmes cadastrados', async () => {
		const resposta = await request(app)
			.get('/filmes')
			.expect(200)

			const index = resposta.body.length - 1
			idTeste = resposta.body[index]._id

			expect(resposta.body[0].name).toEqual('O Hobbit: Uma Jornada Inesperada')
	})
})

describe('GET em /filmes/id', () => {
	it('Deve mostrar informacoes do filme pelo id', async () => {
		const resposta = await request(app)
			.get('/filmes/641758df0355de25648a4d9e')
			.expect(200)

			expect(resposta.body.name).toEqual('StarWars Episodio VI - O Retorno de Jedi')
	})
})


describe('PUT em /filmes', () => {
	it('Deve atualizar dados de um filme', async () => {
		const resposta = await request(app)
			.put(`/filmes/${idTeste}`)
			.send(
				{
					'name': 'atualizado',
					'img': 'atualizado'
				}
			)
			.expect(200)
			
			expect(resposta.body.message).toEqual('Filme atualizado com sucesso')
	})
})

describe('DELETE em /filmes', () => {
	it('Deve apagar dados de um filme', async () => {
		const resposta = await request(app)
			.delete(`/filmes/${idTeste}`)
			.expect(200)
			
			expect(resposta.body.message).toEqual(`Filme id: ${idTeste}. Apagado com sucesso`)
	})
})



