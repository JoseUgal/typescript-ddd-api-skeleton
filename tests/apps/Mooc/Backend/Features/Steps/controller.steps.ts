import assert from 'assert';
import { AfterAll, BeforeAll, Then, When } from '@cucumber/cucumber';
import request from 'supertest';
import { MoocBackendApp } from '../../../../../../src/apps/Mooc/Backend/MoocBackendApp';

let _request: request.Test;
let application: MoocBackendApp;
let _response: request.Response;

When('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

When('I send a PUT request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer).put(route).send(JSON.parse(body));
});

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});

BeforeAll(async () => {
  application = new MoocBackendApp();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});
