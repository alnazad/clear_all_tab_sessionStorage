// delete all session data 
    fcnDeleteonetime_session() {
      sessionStorage.clear()
      sessionStorage.removeItem('selectedItems');
      // this will trigger other page tab data
      localStorage.setItem('clearSession', Date.now().toString());
      alert('削除が完了しました')
      window.close();
    }
  
