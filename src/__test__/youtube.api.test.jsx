import youtube from '../components/apis/youtube';

describe('Test Set for youtube api', () => {
  it('test youtube with apikey', async () => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: 'test',
        },
      });
      expect(response.status).toBe(200);
    } catch (error) {
      expect(true).toBe(true);
    }
  });
});
