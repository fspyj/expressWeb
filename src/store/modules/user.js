import local from '../../unit/local'
export default {
    state: {
        loginToken: local.get('loginToken'),
        username:local.get('username')
    },
    getters: {
        getToken: (state) => {
            return state.loginToken;
        }
        ,
        getUsername:(state)=>{
            return  "欢迎: "+ state.username
        }
    },
    mutations: {
        SET_LOGIN_TOKEN: (state, data) => {
            state.loginToken = data.token;
            state.username = data.username;
        }
    },
    actions: {
        set_login({ commit, state }, res) {
            local.set('loginToken', res.token)
            local.set('username',res.username)
            commit("SET_LOGIN_TOKEN", res)
        }
    }
}