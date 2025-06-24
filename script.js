function sendToMentor() {
  const text = document.getElementById('mentorMessage').value.trim();
  if (text) {
    const encodedText = encodeURIComponent("Konsultasi dari siswa:\n\n" + text);
    const phoneNumber = "6285624375695"; // Ganti dengan nomor WhatsApp pembimbing
    const waLink = 'https://wa.me/${phoneNumber}?text=${encodedText}';
    window.open(waLink, '_blank');
    document.getElementById('mentorMessage').value = '';
  } else {
    alert("Tolong isi pertanyaan kamu terlebih dahulu.");
  }
}