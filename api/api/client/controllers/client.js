'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
     * Retrieve records.
     *
     * @return {Array}
     */
  
    async find(ctx) {
      let entities;
      if (ctx.query._q) {
        entities = await strapi.services.client.search(ctx.query);
      } else {
        entities = await strapi.services.client.find(ctx.query);
      }
      const clients = entities.map(entity => sanitizeEntity(entity, { model: strapi.models.client })).map(client => {
          return {
              id: client.id,
              name: client.name,
              designs: client.designs,
              url: client.url,
              logo:{
                  thumbnail: client.logo.formats.thumbnail.url,
                  url: client.logo.url
              }
          }
      });

      return clients;
    },
  };
