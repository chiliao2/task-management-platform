Ext.define('App.commons.museumversion.model.MuseumVersionModel', {
            extend : 'Extend.data.BaseModel',
            fields : [],
            proxy : {
                type : 'majax',
                url : 'commons/museumversion/query',
                reader : {
                    type : 'json',
                    rootProperty : 'data',
                    totalProperty : 'total'
                }
            }
        });
