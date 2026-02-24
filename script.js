// Simple modal handler and project details
document.addEventListener('DOMContentLoaded',()=>{
  const modal=document.getElementById('modal');
  const modalContent=document.getElementById('modal-content');
  const closeBtn=document.querySelector('.modal-close');

  function openModal(html){
    modalContent.innerHTML=html;
    modal.setAttribute('aria-hidden','false');
  }
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    modalContent.innerHTML='';
  }
  closeBtn.addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});

  document.querySelectorAll('[data-modal]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const id=btn.getAttribute('data-modal');
      if(id==='modal-project-1'){
        openModal('<h3>Cyber Range Simulator</h3><p>Detailed write-up on creating isolated container-based labs, auto-scoring and scenario orchestration. Tech: Docker, Ansible, Python.</p>');
      }else if(id==='modal-project-2'){
        openModal('<h3>Secure Web Proxy</h3><p>Implemented content filtering, rate-limits and TLS inspection. Tech: Go, TLS, Content Security.</p>');
      }else if(id==='modal-project-3'){
        openModal('<h3>Malware Analysis Toolkit</h3><p>Sandbox automation with static & dynamic analysis pipelines. Tech: Python, YARA, Virtualization.</p>');
      }
    })
  })
});
