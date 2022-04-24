module.exports = ({ wallets, refs, config, client }) => ({
  getCount: () => client.query('counter', { get_count: {} }),
  increment: (signer = wallets.validator) =>
    client.execute(signer, 'counter', { increment: {} }),

  getSize: () => client.query('clicker', { get_size: {} }),
  getName: () => client.query('clicker', { get_name: {} }),
  getScores: () => client.query('clicker', { get_scores: {} }),
  upsertScore: (score, signer = wallets.validator) => {
    client.execute(signer, 'clicker', { upsert_score: { score } });
  },
});
