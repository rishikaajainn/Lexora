import os
import fitz  # PyMuPDF


class PDFHighlighter:

    def highlight_pdf(
        self,
        pdf_path: str,
        annotations: list,
    ):

        # -----------------------------
        # Open PDF
        # -----------------------------

        doc = fitz.open(pdf_path)

        # -----------------------------
        # Highlight every annotation
        # -----------------------------

        for annotation in annotations:

            text = annotation.get("text", "").strip()

            if not text:
                continue

            # Search all pages
            for page in doc:

                matches = page.search_for(text)

                if not matches:
                    continue

                severity = annotation.get(
                    "severity",
                    "Medium"
                ).lower()

                for rect in matches:

                    highlight = page.add_highlight_annot(rect)

                    # -------------------------
                    # Color according to severity
                    # -------------------------

                    if severity == "critical":

                        # Red
                        highlight.set_colors(stroke=(1, 0, 0))

                    elif severity == "high":

                        # Orange
                        highlight.set_colors(stroke=(1, 0.5, 0))

                    elif severity == "medium":

                        # Yellow
                        highlight.set_colors(stroke=(1, 1, 0))

                    else:

                        # Green
                        highlight.set_colors(stroke=(0, 1, 0))

                    highlight.update()

        # -----------------------------
        # Save highlighted PDF
        # -----------------------------

        base = os.path.splitext(pdf_path)[0]

        output_path = base + "_highlighted.pdf"

        doc.save(
            output_path,
            garbage=4,
            deflate=True,
        )

        doc.close()

        return output_path


pdf_highlighter = PDFHighlighter()