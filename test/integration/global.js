  before(async () => {
    global.app = await setupApp();
    global.request = supertest(app);
  })

  after(async () => await app.database.connection.close());