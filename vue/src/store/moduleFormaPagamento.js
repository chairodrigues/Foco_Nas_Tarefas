 import Http from "@/lib/http";
import util from "@/lib/util";
import actionWrapper from "@/lib/helpers/action-wrapper";

export default {
  namespaced: "moduleFormaPagamento",
  state: {
    application: null,
  },
  actions: {
    // init: actionWrapper({
    //   async action(content) {
    //     var tenant = util.abp.multiTenancy.getTenantIdCookie();
    //     const rep = await Http.get(
    //       "/api/services/app/Session/GetCurrentLoginInformations",
    //       {
    //         headers: {
    //           "Abp.TenantId": tenant,
    //         },
    //       }
    //     );
       
    //     content.state.application = rep.data.result.application;
    //     content.state.formaPagamento = rep.data.result.formaPagamento;
    //     content.state.ativo = rep.data.result.ativo;
    //     return rep;
    //   },
    // }),

    criarPagamento: actionWrapper({
        async action(context, payload) {
          return Http.post(`/api/services/app/Pagamento/Create`, payload);
        },
      }),

    carregarPagamento: actionWrapper({
      async action(context, payload) {
        return Http.get(`/api/services/app/Pagamento/GetAll`, 
          {
            params: {
              search: payload.search,
              take: payload.take,
              skip: payload.skip,
              orderBy : payload.orderBy,
              desc : payload.desc,
            },
          },
        );
      },
    }),

    atualizarPagamento: actionWrapper({
        async action(context, payload) {
          return Http.patch(`/api/services/app/Pagamento/Update`, payload);
        },
      }),
 
    deletarPagamento: actionWrapper({
        async action(context, payload) {
          return await Http.delete(`/api/services/app/Pagamento/Delete`, {
              params: {
                id: payload,
              },
            },
          );
        },
      }), 
  },
};