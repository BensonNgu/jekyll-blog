(function () {
     const form = document.getElementById('contact-form');
     const toast = document.getElementById('toast');
     const toastMsg = document.getElementById('toast-message');
     const toastClose = document.getElementById('toast-close');
     let toastTimer = null;



     function showToast(message, duration = 3000) {
          toast.hidden = false;
          toastMsg.textContent = message;
          requestAnimationFrame(() => toast.classList.add('show'));
          clearTimeout(toastTimer);
          if (duration > 0) {
               toastTimer = setTimeout(hideToast, duration);
          }
     }

     function hideToast() {
          toast.classList.remove('show');
          // Wait for transition to end before hiding
          setTimeout(() => { toast.hidden = true; }, 200);
     }

     toastClose.addEventListener('click', hideToast);

     form.addEventListener('submit', async function (e) {
          e.preventDefault();

          // UX: immediate feedback
          showToast('Sending…', 0);

          const formData = new FormData(form);
          try {
               const res = await fetch(form.action, { method: 'POST', body: formData });
               const data = await res.json();

               if (data.success) {
                    showToast('Form submitted successfully ✅');
                    form.reset();
               } else {
                    console.error('Web3Forms error:', data);
                    showToast('Submission failed. Please try again.');
               }
          } catch (err) {
               console.error(err);
               showToast('Network error. Please try again.');
          } finally {
               // Auto-hide after a moment if it was “Sending…”
               setTimeout(() => { if (!toast.hidden) hideToast(); }, 3500);
          }
     });
})();