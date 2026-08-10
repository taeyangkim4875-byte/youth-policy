import Link from 'next/link';
import Card from '@/components/Card';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <Card className="text-center">
        <p className="text-4xl mb-3">🔍</p>
        <h1 className="text-xl font-extrabold mb-2">페이지를 찾을 수 없습니다</h1>
        <p className="text-sm text-muted mb-4">
          요청하신 페이지가 존재하지 않거나 삭제되었습니다.
        </p>
        <Link
          href="/"
          className="inline-block px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-d transition-colors no-underline"
        >
          정책 매칭으로 돌아가기
        </Link>
      </Card>
    </div>
  );
}
