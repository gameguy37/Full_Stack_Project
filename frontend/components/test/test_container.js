import { connect } from 'react-redux';
import Test from './test';





import { fetchPosts, deletePost } from '../../actions/post_actions';



const mapStateToProps = state => ({
    users: Object.values(state.users)
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
