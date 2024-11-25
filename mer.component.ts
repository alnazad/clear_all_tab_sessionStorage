async ngOnInit() {
    sessionStorage.clear()
    sessionStorage.removeItem('selectedItems');

    if (typeof window !== 'undefined') {
      (window as any).addEventListener('storage', this.handleStorageEvent);
    }
  }

 handleStorageEvent(event: StorageEvent): void {
    if (event.key === 'clearSession') {
      // Clear sessionStorage in other tabs
      sessionStorage.clear();
      sessionStorage.removeItem('selectedItems');
    }
  }
