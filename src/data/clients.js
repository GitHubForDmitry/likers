const ClientsAPI = {
  clients: [
    {
      id: 1,
      number: "01",
      name: "Barack Obama",
      profession: "Dad, husband, President, citizen."
    },
    {
      id: 2,
      number: "02",
      name: "Georgina Alson",
      profession: "young model 2020"
    },
    {
      id: 3,
      number: "03",
      name: "KATY PERRY",
      profession: "Love. Light."
    },
    {
      id: 4,
      number: "04",
      name: "Justin Bieber",
      profession: "Let's make the world better."
    }
  ],
  all: function() {
    return this.clients;
  },
  get: function(id) {
    const isClient = p => p.number === id;
    return this.clients.find(isClient);
  }
};
export default ClientsAPI;