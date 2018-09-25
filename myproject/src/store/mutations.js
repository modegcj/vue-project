import state from './state'

const mutations = {
    footerShow(state){
        state.footerShow = true
    },
    footerHidden(state){
        state.footerShow = false
    }
};
export default mutations;
