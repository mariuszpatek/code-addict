// Add copy buttons to all code blocks
document.addEventListener('DOMContentLoaded', function() {
    // Find all code blocks (pre > code elements)
    const codeBlocks = document.querySelectorAll('pre > code');
    
    codeBlocks.forEach(function(codeBlock) {
        // Create wrapper div for positioning
        const pre = codeBlock.parentElement;
        
        // Skip if button already exists
        if (pre.querySelector('.copy-code-button')) {
            return;
        }
        
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';
        copyButton.type = 'button';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        copyButton.innerHTML = `
            <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="copy-text">Copy</span>
        `;
        
        // Add click event to copy code
        copyButton.addEventListener('click', async function() {
            const code = codeBlock.textContent;
            
            try {
                await navigator.clipboard.writeText(code);
                
                // Show success state
                const copyIcon = copyButton.querySelector('.copy-icon');
                const checkIcon = copyButton.querySelector('.check-icon');
                const copyText = copyButton.querySelector('.copy-text');
                
                copyIcon.style.display = 'none';
                checkIcon.style.display = 'inline';
                copyText.textContent = 'Copied!';
                copyButton.classList.add('copied');
                
                // Reset after 2 seconds
                setTimeout(function() {
                    copyIcon.style.display = 'inline';
                    checkIcon.style.display = 'none';
                    copyText.textContent = 'Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
                
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = code;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    textArea.remove();
                    
                    // Show success state
                    const copyIcon = copyButton.querySelector('.copy-icon');
                    const checkIcon = copyButton.querySelector('.check-icon');
                    const copyText = copyButton.querySelector('.copy-text');
                    
                    copyIcon.style.display = 'none';
                    checkIcon.style.display = 'inline';
                    copyText.textContent = 'Copied!';
                    copyButton.classList.add('copied');
                    
                    setTimeout(function() {
                        copyIcon.style.display = 'inline';
                        checkIcon.style.display = 'none';
                        copyText.textContent = 'Copy';
                        copyButton.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    textArea.remove();
                    console.error('Fallback copy failed:', err);
                }
            }
        });
        
        // Add button to pre element
        pre.style.position = 'relative';
        pre.appendChild(copyButton);
    });
});
