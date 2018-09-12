function diaryReducer (state={allDiary: [], diaryDetail: null}, action) {
  const allDiary = state.allDiary
  switch (action.type) {
    case 'INIT_ALL_DIARY':
      return {...state, allDiary: action.diaryList}
    case 'GET_DIARY_LIST':
      return {...state, allDiary: [...state.allDiary, ...action.diaryList]}
    // ADD_DIARY 目前还没用 因为每次跳转到 DIARY 页面时，会INIT_DIARY一次
    case 'ADD_DIARY':
      return {...state, allDiary: [action.diary, ...allDiary]}
    case 'DELETE_DIARY':
      return {...state,
        allDiary: state.allDiary.filter(diary => {
          return diary._id !== action.id
        })
      }
    case 'MODIFY_DIARY':
      return {...state, 
        allDiary: state.allDiary.map(diary => {
          if (diary._id === action.diary._id) {
            return action.diary
          }
          return diary
        })
      }
    case 'SHOW_DIARY_DETAIL':
      return {...state, diaryDetail: action.diary}
    case 'CLOSE_DIARY_DETAIL':
      return {...state, diaryDetail: null}
    default:
      return state
  }
}

export default diaryReducer